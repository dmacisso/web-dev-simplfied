const express = require("express");
const app = express();

// Data
const users = [
  
]

// ROUTES
app.get("/users", (req, res) => {
  res.json(users)
});

/**Create Users */
app.post('/users', (req,res) => {
  
})

// Server
const port = 3000;
app.listen(port);
console.log(`Server is running on port: ${port}`);
