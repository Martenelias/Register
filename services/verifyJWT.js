const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  console.log('Authorization header:', authHeader); // Debugging line

  if (!authHeader) {
    console.log('No authorization header present.');
    return res.sendStatus(401); // Unauthorized
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    console.log('No token found.');
    return res.sendStatus(401); // Unauthorized
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log('Token verification failed:', err.message);
      return res.sendStatus(403); // Forbidden
    }

    req.user = decoded.username;
    console.log('Token verified successfully:', decoded.username);
    next();
  });
};

module.exports = verifyJWT;
