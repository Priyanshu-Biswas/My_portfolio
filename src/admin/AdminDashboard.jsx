import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAdminBlogs,
  deleteBlog,
} from "../services/blogService";
import {
  getAdminToken,
  logoutAdmin,
} from "../services/authService";

function AdminDashboard() {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const data = await getAdminBlogs();
      setBlogs(data);
    } catch (err) {
      setError(err.message || "Failed to load blogs.");

      if (!getAdminToken()) {
        navigate("/admin/login", { replace: true });
      }
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    if (!getAdminToken()) {
      navigate("/admin/login", { replace: true });
      return;
    }

    fetchBlogs();
  }, [fetchBlogs, navigate]);

  function handleLogout() {
    logoutAdmin();
    navigate("/admin/login", { replace: true });
  }

  async function handleDelete(blog) {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${blog.title}"?`
    );

    if (!confirmed) return;

    setDeletingId(blog._id || blog.id);
    setError("");

    try {
      await deleteBlog(blog._id || blog.id);

      setBlogs((currentBlogs) =>
        currentBlogs.filter(
          (item) =>
            (item._id || item.id) !== (blog._id || blog.id)
        )
      );
    } catch (err) {
      setError(err.message || "Failed to delete blog.");
    } finally {
      setDeletingId(null);
    }
  }

  const publishedCount = blogs.filter(
    (blog) => blog.status === "published"
  ).length;

  const draftCount = blogs.filter(
    (blog) => blog.status === "draft"
  ).length;

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-950">
        <p className="text-gray-500">Loading dashboard...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 dark:bg-gray-950 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-green-600">
              Portfolio Blog
            </p>

            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Admin Dashboard
            </h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Manage your articles, drafts, and publications.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/blog"
              className="rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              View Blog
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg border border-red-200 px-4 py-2 font-medium text-red-600 hover:bg-red-50 dark:border-red-900 dark:hover:bg-red-950/30"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Statistics */}
        <section className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <p className="text-sm text-gray-500">Total Blogs</p>
            <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
              {blogs.length}
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <p className="text-sm text-gray-500">Published</p>
            <p className="mt-2 text-3xl font-bold text-green-600">
              {publishedCount}
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <p className="text-sm text-gray-500">Drafts</p>
            <p className="mt-2 text-3xl font-bold text-amber-500">
              {draftCount}
            </p>
          </div>
        </section>

        {/* Blog Management */}
        <section className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 p-5 dark:border-gray-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Manage Blogs
            </h2>

            <Link
              to="/admin/blog/new"
              className="rounded-lg bg-green-600 px-5 py-2.5 font-semibold text-white hover:bg-green-700"
            >
              + Create Blog
            </Link>
          </div>

          {error && (
            <div className="m-5 rounded-lg bg-red-50 p-4 text-red-600 dark:bg-red-950/30 dark:text-red-400">
              {error}

              <button
                type="button"
                onClick={fetchBlogs}
                className="ml-3 font-semibold underline"
              >
                Retry
              </button>
            </div>
          )}

          {blogs.length === 0 && !error ? (
            <div className="px-5 py-16 text-center">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                No blogs yet
              </h3>

              <p className="mt-2 text-gray-500">
                Create your first article to get started.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px] text-left">
                <thead className="bg-gray-50 text-sm text-gray-500 dark:bg-gray-800/50">
                  <tr>
                    <th className="px-5 py-4 font-medium">Blog</th>
                    <th className="px-5 py-4 font-medium">Status</th>
                    <th className="px-5 py-4 font-medium">Likes</th>
                    <th className="px-5 py-4 font-medium">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {blogs.map((blog) => {
                    const id = blog._id || blog.id;

                    return (
                      <tr key={id}>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            {blog.coverImage ? (
                              <img
                                src={blog.coverImage}
                                alt=""
                                className="h-14 w-16 rounded-lg object-cover"
                              />
                            ) : (
                              <div className="h-14 w-16 rounded-lg bg-gray-100 dark:bg-gray-800" />
                            )}

                            <div>
                              <p className="font-semibold text-gray-900 dark:text-white">
                                {blog.title}
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                {blog.category || "Technology"}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-5 py-4">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              blog.status === "published"
                                ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400"
                                : "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400"
                            }`}
                          >
                            {blog.status || "draft"}
                          </span>
                        </td>

                        <td className="px-5 py-4 text-gray-600 dark:text-gray-300">
                          {blog.likes ?? 0}
                        </td>

                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <Link
                              to={`/admin/blog/edit/${id}`}
                              className="font-medium text-green-600 hover:text-green-700"
                            >
                              Edit
                            </Link>

                            <button
                              type="button"
                              onClick={() => handleDelete(blog)}
                              disabled={deletingId === id}
                              className="font-medium text-red-500 hover:text-red-700 disabled:opacity-50"
                            >
                              {deletingId === id
                                ? "Deleting..."
                                : "Delete"}
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default AdminDashboard;