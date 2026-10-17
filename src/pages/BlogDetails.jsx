
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


import {
  getBlogBySlug,
  likeBlog,
} from "../services/blogService";

function BlogDetails() {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [liking, setLiking] = useState(false);
  const [likeError, setLikeError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function fetchBlog() {
      try {
        setLoading(true);
        setError("");

        const data = await getBlogBySlug(slug);

        if (!ignore) {
          setBlog(data);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message || "Unable to load this blog.");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    fetchBlog();

    return () => {
      ignore = true;
    };
  }, [slug]);

  async function handleLike() {
    if (!blog || liking) return;

    try {
      setLiking(true);
      setLikeError("");

      const result = await likeBlog(blog._id || blog.id);

      setBlog((current) => ({
        ...current,
        likes: result.likes,
      }));
    } catch (err) {
      setLikeError(err.message || "Could not like this blog.");
    } finally {
      setLiking(false);
    }
  }

  if (loading) {
    return (
      <main className="px-5 py-24 text-center text-gray-500">
        Loading article...
      </main>
    );
  }

  if (error || !blog) {
    return (
      <main className="px-5 py-24 text-center">
        <h1 className="mb-4 text-2xl font-bold dark:text-white">
          {error || "Blog not found"}
        </h1>

        <Link to="/blog" className="font-semibold text-green-600">
          ← Back to blogs
        </Link>
      </main>
    );
  }

  const formattedDate = blog.publishedAt
    ? new Date(blog.publishedAt).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    : null;

  return (
    <main className="min-h-screen bg-white px-5 py-12 dark:bg-gray-950 sm:px-8">
      <article className="mx-auto max-w-3xl">
        <Link
          to="/blog"
          className="mb-8 inline-block font-medium text-green-600 hover:text-green-700"
        >
          ← Back to blogs
        </Link>

        <header className="mb-8">
          <span className="mb-4 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900/40 dark:text-green-400">
            {blog.category || "Technology"}
          </span>

          <h1 className="mb-5 text-3xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-5xl">
            {blog.title}
          </h1>

          {formattedDate && (
            <time
              dateTime={blog.publishedAt}
              className="text-gray-500 dark:text-gray-400"
            >
              Published on {formattedDate}
            </time>
          )}
        </header>

        {blog.coverImage && (
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="mb-10 max-h-[480px] w-full rounded-2xl object-cover"
          />
        )}

        {blog.summary && (
          <p className="mb-8 border-l-4 border-green-500 pl-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {blog.summary}
          </p>
        )}

        {/* Article Content */}
        <div className="break-words text-lg leading-8 text-gray-700 dark:text-gray-300">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: (props) => <h1 className="mt-16 mb-6 text-5xl font-extrabold text-gray-900 dark:text-white" {...props} />,
              h2: (props) => <h2 className="mt-16 mb-5 text-4xl font-extrabold text-gray-900 dark:text-white" {...props} />,
              h3: (props) => <h3 className="mt-12 mb-4 text-3xl font-bold text-gray-900 dark:text-white" {...props} />,
              p: (props) => <p className="my-5" {...props} />,
              ul: (props) => <ul className="my-5 list-disc space-y-2 pl-6" {...props} />,
              ol: (props) => <ol className="my-5 list-decimal space-y-2 pl-6" {...props} />,
              a: (props) => <a className="text-green-600 underline" {...props} />,
              strong: (props) => <strong className="font-bold text-gray-900 dark:text-white" {...props} />,
              pre: (props) => <pre className="my-6 overflow-x-auto rounded-xl bg-gray-900 p-4 text-sm text-gray-100" {...props} />,
              code: (props) => <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800" {...props} />,
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </div>

        {/* Like Button */}
        <div className="mt-12 border-t border-gray-200 pt-6 dark:border-gray-700">
          <button
            type="button"
            onClick={handleLike}
            disabled={liking}
            className="inline-flex items-center gap-3 rounded-full border border-rose-200 px-5 py-3 font-semibold text-rose-600 transition hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-rose-900 dark:hover:bg-rose-950"
          >
            <span aria-hidden="true" className="text-xl">
              ♥
            </span>
            {liking ? "Liking..." : "Like"}
            <span>{blog.likes ?? 0}</span>
          </button>

          {likeError && (
            <p className="mt-3 text-sm text-red-500" role="alert">
              {likeError}
            </p>
          )}
        </div>
      </article>
    </main>
  );
}

export default BlogDetails;
