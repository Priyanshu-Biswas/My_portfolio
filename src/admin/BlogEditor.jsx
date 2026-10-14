
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  createBlog,
  getAdminBlogs,
  updateBlog,
} from "../services/blogService";
import { getAdminToken } from "../services/authService";

const initialForm = {
  title: "",
  summary: "",
  content: "",
  coverImage: "",
  category: "Technology",
  status: "draft",
};

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-gray-900 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100 disabled:opacity-60 dark:border-gray-700 dark:text-white";

const labelClass =
  "mb-2 block font-semibold text-gray-700 dark:text-gray-200";

function BlogEditor() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);

  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [imageError, setImageError] = useState(false);

  // Check authentication and load the existing blog when editing.
  useEffect(() => {
    let cancelled = false;

    async function loadBlog() {
      if (!getAdminToken()) {
        navigate("/admin/login", { replace: true });
        return;
      }

      if (!isEditing) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError("");

      try {
        const blogs = await getAdminBlogs();

        const blog = blogs.find(
          (item) => String(item._id ?? item.id) === String(id)
        );

        if (!blog) {
          throw new Error(
            "Blog not found. Check that the blog ID is correct and your admin API returns this blog."
          );
        }

        if (cancelled) return;

        setForm({
          title: blog.title ?? "",
          summary: blog.summary ?? "",
          content: blog.content ?? "",
          coverImage: blog.coverImage ?? "",
          category: blog.category ?? "Technology",
          status: blog.status ?? "draft",
        });
      } catch (err) {
        if (!cancelled) {
          setError(err.message || "Unable to load this blog.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadBlog();

    return () => {
      cancelled = true;
    };
  }, [id, isEditing, navigate]);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");

    if (name === "coverImage") {
      setImageError(false);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (saving) return;

    if (!getAdminToken()) {
      navigate("/admin/login", { replace: true });
      return;
    }

    const title = form.title.trim();
    const summary = form.summary.trim();
    const content = form.content.trim();
    const coverImage = form.coverImage.trim();
    const category = form.category.trim();

    if (!title || !summary || !content) {
      setError("Please complete the title, summary, and blog content.");
      return;
    }

    if (title.length > 200) {
      setError("The title must not exceed 200 characters.");
      return;
    }

    if (summary.length > 500) {
      setError("The summary must not exceed 500 characters.");
      return;
    }

    if (coverImage) {
      try {
        const imageUrl = new URL(coverImage);

        if (!["http:", "https:"].includes(imageUrl.protocol)) {
          throw new Error("Invalid protocol");
        }
      } catch {
        setError("Please enter a valid cover image URL.");
        return;
      }
    }

    const blogData = {
      title,
      summary,
      content,
      coverImage,
      category: category || "Technology",
      status: form.status,
    };

    setSaving(true);
    setError("");

    try {
      if (isEditing) {
        await updateBlog(id, blogData);
      } else {
        await createBlog(blogData);
      }

      navigate("/admin", { replace: true });
    } catch (err) {
      setError(err.message || "Unable to save the blog. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="text-center">
          <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-4 border-green-200 border-t-green-600" />
          <p className="text-gray-600 dark:text-gray-300">
            Loading blog...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 dark:bg-gray-950 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          to="/admin"
          className="mb-6 inline-flex items-center gap-2 font-medium text-green-600 hover:text-green-700"
        >
          <span aria-hidden="true">←</span>
          Back to dashboard
        </Link>

        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {isEditing ? "Edit Blog" : "Create New Blog"}
            </h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Write your article, save a draft, or publish it on your portfolio.
            </p>
          </header>

          {error && (
            <div
              role="alert"
              aria-live="polite"
              className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/30 dark:text-red-400"
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Blog title */}
            <div>
              <label htmlFor="title" className={labelClass}>
                Blog Title *
              </label>

              <input
                id="title"
                name="title"
                type="text"
                value={form.title}
                onChange={handleChange}
                maxLength={200}
                placeholder="e.g. Understanding React Hooks"
                autoComplete="off"
                required
                disabled={saving}
                className={inputClass}
              />

              <p className="mt-1 text-right text-xs text-gray-500">
                {form.title.length}/200
              </p>
            </div>

            {/* Summary */}
            <div>
              <label htmlFor="summary" className={labelClass}>
                Short Summary *
              </label>

              <textarea
                id="summary"
                name="summary"
                value={form.summary}
                onChange={handleChange}
                rows={3}
                maxLength={500}
                placeholder="Briefly describe what your article is about..."
                required
                disabled={saving}
                className={`${inputClass} resize-y`}
              />

              <p className="mt-1 text-right text-xs text-gray-500">
                {form.summary.length}/500
              </p>
            </div>

            {/* Cover image */}
            <div>
              <label htmlFor="coverImage" className={labelClass}>
                Cover Image URL
              </label>

              <input
                id="coverImage"
                name="coverImage"
                type="url"
                value={form.coverImage}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                disabled={saving}
                className={inputClass}
              />

              {form.coverImage.trim() && !imageError && (
                <div className="mt-4">
                  <p className="mb-2 text-sm text-gray-500">
                    Cover image preview
                  </p>

                  <img
                    src={form.coverImage.trim()}
                    alt="Blog cover preview"
                    onError={() => setImageError(true)}
                    className="max-h-72 w-full rounded-xl border border-gray-200 object-cover dark:border-gray-700"
                  />
                </div>
              )}

              {form.coverImage.trim() && imageError && (
                <p className="mt-2 text-sm text-amber-600">
                  Image preview unavailable. Check the URL or try another image.
                </p>
              )}
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className={labelClass}>
                Category
              </label>

              <select
                id="category"
                name="category"
                value={form.category}
                onChange={handleChange}
                disabled={saving}
                className={`${inputClass} dark:bg-gray-900`}
              >
                <option value="Technology">Technology</option>
                <option value="Programming">Programming</option>
                <option value="Web Development">Web Development</option>
                <option value="Projects">Projects</option>
                <option value="Learning">Learning</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Article content */}
            <div>
              <label htmlFor="content" className={labelClass}>
                Blog Content *
              </label>

              <textarea
                id="content"
                name="content"
                value={form.content}
                onChange={handleChange}
                rows={16}
                placeholder="Write your complete blog article here..."
                required
                disabled={saving}
                className={`${inputClass} resize-y leading-7`}
              />

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                This editor saves plain text. Line breaks are preserved, but
                rich-text formatting is not supported yet.
              </p>
            </div>

            {/* Status */}
            <div>
              <label htmlFor="status" className={labelClass}>
                Publication Status
              </label>

              <select
                id="status"
                name="status"
                value={form.status}
                onChange={handleChange}
                disabled={saving}
                className={`${inputClass} dark:bg-gray-900`}
              >
                <option value="draft">Save as Draft</option>
                <option value="published">Publish Now</option>
              </select>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Drafts should remain private. Published articles should appear
                on your public blog page.
              </p>
            </div>

            {/* Form actions */}
            <div className="flex flex-wrap gap-3 border-t border-gray-200 pt-6 dark:border-gray-800">
              <button
                type="submit"
                disabled={saving}
                className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving
                  ? "Saving..."
                  : isEditing
                    ? "Save Changes"
                    : form.status === "published"
                      ? "Publish Blog"
                      : "Save Draft"}
              </button>

              <button
                type="button"
                onClick={() => navigate("/admin")}
                disabled={saving}
                className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100 disabled:opacity-60 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                Cancel
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}

export default BlogEditor;
