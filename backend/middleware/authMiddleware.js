/**
 * Authentication Middleware
 * 
 * This middleware is responsible for validating JWT tokens in incoming requests. It is used to protect routes that require authentication.
 * 
 * Process:
 * - Extracts the token from the request header 'x-auth-token'.
 * - If no token is found, it returns a 401 Unauthorized response.
 * - If a token is present, it attempts to verify the token using the secret key.
 * - If verification is successful, it adds the decoded user information to the request object and proceeds to the next middleware.
 * - If verification fails (invalid token), it returns a 401 Unauthorized response with an error message.
 * 
 * Dependencies:
 * - jsonwebtoken: For verifying JWT tokens.
 * - authConfig: Configuration module providing the secret key for token verification.
 * 
 * Exports:
 * - A middleware function for token verification and user authentication.
 */

const jwt = require('jsonwebtoken');
const { secretKey } = require('./authConfig');

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
