import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  const formattedDate = blog.publishedAt
    ? new Date(blog.publishedAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : null;

  const blogUrl = `/blog/${encodeURIComponent(blog.slug)}`;

  return (
    <article className="group mx-auto flex w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl md:w-[90vw] md:flex-row dark:border-gray-700 dark:bg-gray-900">
      {/* Cover Image (16:9 on desktop, centered) */}
      <Link
        to={blogUrl}
        className="flex shrink-0 items-center justify-center overflow-hidden md:w-1/2 md:self-center lg:w-[55%]"
      >
        {blog.coverImage ? (
          <img
            src={blog.coverImage}
            alt={blog.title}
            loading="lazy"
            className="mx-auto h-52 w-full object-cover transition duration-500 group-hover:scale-105 md:aspect-video md:h-auto"
          />
        ) : (
          <div className="flex h-52 w-full items-center justify-center bg-gray-100 text-gray-400 md:aspect-video md:h-auto dark:bg-gray-800">
            No cover image
          </div>
        )}
      </Link>

      {/* Blog Information */}
      <div className="flex min-w-0 flex-1 flex-col p-5 md:p-6">
        <div className="mb-3 flex items-center justify-between gap-3 text-sm">
          <span className="rounded-full bg-green-100 px-3 py-1 font-medium text-green-700 dark:bg-green-900/40 dark:text-green-400">
            {blog.category || "Technology"}
          </span>

          {formattedDate && (
            <time
              dateTime={blog.publishedAt}
              className="text-gray-500 dark:text-gray-400"
            >
              {formattedDate}
            </time>
          )}
        </div>

        <Link to={blogUrl}>
          <h2 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-green-600 md:line-clamp-2 lg:text-2xl dark:text-white">
            {blog.title}
          </h2>
        </Link>

        <p className="mb-5 line-clamp-3 leading-7 text-gray-600 dark:text-gray-300">
          {blog.summary}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-700">
          <Link
            to={blogUrl}
            className="font-semibold text-green-600 hover:text-green-700"
          >
            Read article →
          </Link>

          <span
            className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
            aria-label={`${blog.likes ?? 0} likes`}
          >
            <span aria-hidden="true" className="text-lg text-rose-500">
              ♥
            </span>
            {blog.likes ?? 0}
          </span>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;