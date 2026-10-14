
const API_URL = (
  import.meta.env.VITE_API_BASE_URL ||
  "http://localhost:5000/api"
).replace(/\/+$/, "");

const TOKEN_KEY = "adminToken";

// Reusable API request function
async function apiRequest(endpoint, options = {}) {
  let response;

  try {
    response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });
  } catch {
    throw new Error(
      "Cannot connect to the server. Please check that your backend is running."
    );
  }

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      result.message || `Request failed with status ${response.status}.`
    );
  }

  return result;
}

// Admin login
export async function loginAdmin(credentials) {
  const email = credentials.email?.trim();
  const password = credentials.password;

  if (!email || !password) {
    throw new Error("Email and password are required.");
  }

  const result = await apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const token = result.token ?? result.data?.token;

  if (typeof token !== "string" || !token.trim()) {
    throw new Error(
      "Login response did not contain a valid authentication token."
    );
  }

  localStorage.setItem(TOKEN_KEY, token);

  return result;
}

// Get the stored token
export function getAdminToken() {
  return localStorage.getItem(TOKEN_KEY);
}

// Check whether a token exists
export function isAdminLoggedIn() {
  return Boolean(getAdminToken());
}

// Add the token to protected API requests
export function getAuthHeaders() {
  const token = getAdminToken();

  return token
    ? { Authorization: `Bearer ${token}` }
    : {};
}

// Logout the admin
export function logoutAdmin() {
  localStorage.removeItem(TOKEN_KEY);
}
