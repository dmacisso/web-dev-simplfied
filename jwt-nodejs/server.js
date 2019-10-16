require("dotenv").config();

const express = require("express");
app = express();

const jwt = require("jsonwebtoken");

// Body Parser
app.use(express.json());

// POSTS data
const posts = [
  { username: "David", title: "post 1" },
  { username: "Thomas", title: "post 2" }
];

// Route
app.get("/posts", authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name));

  // res.status(200).json({
  //   status: "success",
  //   data: {
  //     posts: filteredPosts
  //   }
  // });
});

// Middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  //  authHeader has "BEARER TOKEN"

  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Server
const port = 3000;
app.listen(port);
console.log(`Server is running on port: ${port}`);
