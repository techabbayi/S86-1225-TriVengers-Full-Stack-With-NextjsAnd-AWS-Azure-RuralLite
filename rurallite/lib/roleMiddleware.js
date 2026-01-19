import { sendError } from "./responseHandler";
import { ERROR_CODES } from "./errorCodes";

/**
 * Check if user has required role
 * @param {Request} req - Request object with user headers
 * @param {Array<string>} allowedRoles - Array of allowed roles
 * @returns {Object|Response} - User info or error response
 */
export function checkRole(req, allowedRoles) {
  const userRole = req.headers.get("x-user-role");
  const userId = req.headers.get("x-user-id");
  const userEmail = req.headers.get("x-user-email");

  if (!userRole || !userId) {
    return sendError(
      "Authorization failed. User information missing.",
      ERROR_CODES.UNAUTHORIZED,
      401
    );
  }

  if (!allowedRoles.includes(userRole)) {
    return sendError(
      `Access denied. Required role: ${allowedRoles.join(" or ")}. Your role: ${userRole}`,
      ERROR_CODES.UNAUTHORIZED,
      403
    );
  }

  return {
    id: userId,
    email: userEmail,
    role: userRole,
  };
}

/**
 * Check if user is admin
 * @param {Request} req - Request object
 * @returns {boolean}
 */
export function isAdmin(req) {
  const userRole = req.headers.get("x-user-role");
  return userRole === "ADMIN";
}

/**
 * Check if user is teacher or admin
 * @param {Request} req - Request object
 * @returns {boolean}
 */
export function isTeacherOrAdmin(req) {
  const userRole = req.headers.get("x-user-role");
  return userRole === "ADMIN" || userRole === "TEACHER";
}

/**
 * Get current user from request headers
 * @param {Request} req - Request object
 * @returns {Object|null} - User object or null
 */
export function getCurrentUser(req) {
  const userId = req.headers.get("x-user-id");
  const userEmail = req.headers.get("x-user-email");
  const userRole = req.headers.get("x-user-role");

  if (!userId || !userEmail || !userRole) {
    return null;
  }

  return {
    id: parseInt(userId),
    email: userEmail,
    role: userRole,
  };
}
