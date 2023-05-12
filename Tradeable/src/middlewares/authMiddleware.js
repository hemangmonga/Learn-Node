// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;

  // Check if the token exists
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try
  {
    // Verify the token
    const decodedToken = jwt.verify(token, 'secret');

    // Attach the user ID to the request object
    req.userId = decodedToken.userId;

    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = { requireAuth };
