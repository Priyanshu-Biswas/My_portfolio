
import { useEffect, useState } from "react";
import BlogCard from "../Component/BlogCard";
import { getBlogs } from "../services/blogService";
import Navber from "../Component/Navber";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function fetchBlogs() {
      try {
        setLoading(true);
        setError("");

        const data = await getBlogs();

        if (!ignore) {
          setBlogs(data);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message || "Failed to load blogs.");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    fetchBlogs();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 px-5 py-16 dark:bg-gray-950 sm:px-8">
        <Navber/>
      <div className="mx-auto max-w-7xl">
        {/* Page Heading */}
        <header className="mt-12 mb-12 text-center">
          

          <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Thoughts, Tutorials & Experiences
          </h1>

          <p className="mx-auto max-w-2xl leading-7 text-gray-600 dark:text-gray-300">
            Explore my programming journey, development tutorials,
            projects, and the things I learn along the way.
          </p>
        </header>

        {/* Loading State */}
        {loading && (
          <p className="py-16 text-center text-gray-500" role="status">
            Loading blogs...
          </p>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="py-16 text-center">
            <p className="mb-4 text-red-500">{error}</p>

            <button
              onClick={() => window.location.reload()}
              className="rounded-lg bg-green-600 px-5 py-2 font-medium text-white hover:bg-green-700"
            >
              Try again
            </button>
          </div>
        )}

        {/* Blog Grid */}
        {!loading && !error && blogs.length > 0 && (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog._id || blog.id} blog={blog} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && blogs.length === 0 && (
          <div className="py-20 text-center">
            <h2 className="mb-3 text-2xl font-bold text-gray-800 dark:text-white">
              No blogs published yet
            </h2>

            <p className="text-gray-500 dark:text-gray-400">
              New articles will appear here when they are published.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Blog;
