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
    <article className="group mx-auto flex w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900 md:w-[95%] md:flex-row">
      {/* Cover Image */}
      <Link
        to={blogUrl}
        className="block overflow-hidden bg-gray-100 dark:bg-gray-800 md:w-[45%] md:shrink-0 md:self-center"
      >
        {blog.coverImage ? (
          <img
            src={blog.coverImage}
            alt={blog.title}
            loading="lazy"
            className="h-52 w-full object-cover transition duration-500 group-hover:scale-105 md:aspect-video md:h-auto md:object-contain"
          />
        ) : (
          <div className="flex h-52 items-center justify-center text-gray-400 md:aspect-video md:h-auto">
            No cover image
          </div>
        )}
      </Link>

      {/* Blog Information */}
      <div className="flex flex-1 flex-col justify-between p-5 md:p-8">
        <div>
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
            <h2 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-green-600 dark:text-white md:text-2xl">
              {blog.title}
            </h2>
          </Link>

          <p className="mb-5 line-clamp-3 leading-7 text-gray-600 dark:text-gray-300 md:line-clamp-4">
            {blog.summary}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-700">
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