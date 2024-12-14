const jwt = require('jsonwebtoken');

module.exports = (role) => (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    if (role && decoded.role !== role) return res.status(403).json({ error: "Forbidden" });
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
};
