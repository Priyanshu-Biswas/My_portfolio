
const API_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "http://localhost:5000/api";

// Reusable API request function
async function apiRequest(endpoint, options = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(result.message || "Something went wrong.");
  }

  return result;
}

// Normalize blog list responses
function normalizeList(result) {
  const blogs = Array.isArray(result)
    ? result
    : result.blogs ?? result.data;

  if (!Array.isArray(blogs)) {
    throw new Error("Invalid blogs response from the server.");
  }

  return blogs;
}

// Normalize a single blog response
function normalizeBlog(result) {
  const blog = result.blog ?? result.data ?? result;

  if (!blog || typeof blog !== "object" || !blog.title) {
    throw new Error("Invalid blog response from the server.");
  }

  return blog;
}

// GET: All published blogs (public)
export async function getBlogs() {
  const result = await apiRequest("/blogs");
  return normalizeList(result);
}

// GET: One published blog by slug (public)
export async function getBlogBySlug(slug) {
  const result = await apiRequest(
    `/blogs/${encodeURIComponent(slug)}`
  );

  return normalizeBlog(result);
}

// PATCH: Like a blog (public)
export async function likeBlog(id) {
  const result = await apiRequest(
    `/blogs/${encodeURIComponent(id)}/like`,
    { method: "PATCH" }
  );

  const data = result.blog ?? result.data ?? result;

  if (typeof data.likes !== "number") {
    throw new Error("Updated like count was not returned.");
  }

  return { likes: data.likes };
}

// GET: All blogs, including drafts (admin)
export async function getAdminBlogs() {
  const result = await apiRequest("/blogs/admin/all", {
    headers: getAuthHeaders(),
  });

  return normalizeList(result);
}

// POST: Create a blog (admin)
export async function createBlog(blogData) {
  const result = await apiRequest("/blogs", {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(blogData),
  });

  return normalizeBlog(result);
}

// PATCH: Update a blog (admin)
export async function updateBlog(id, blogData) {
  const result = await apiRequest(
    `/blogs/${encodeURIComponent(id)}`,
    {
      method: "PATCH",
      headers: getAuthHeaders(),
      body: JSON.stringify(blogData),
    }
  );

  return normalizeBlog(result);
}

// DELETE: Delete a blog (admin)
export async function deleteBlog(id) {
  return apiRequest(`/blogs/${encodeURIComponent(id)}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
}

// Get the authentication header from authService's token
function getAuthHeaders() {
  const token = localStorage.getItem("adminToken");

  return token
    ? { Authorization: `Bearer ${token}` }
    : {};
}
