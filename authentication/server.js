const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");

//Body Parser
app.use(express.json());

// Data
const users = [];

// ROUTES
app.get("/users", (req, res) => {
  res.json(users);
});

/**Create Users */
app.post("/users", async (req, res) => {
  try {
    // const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { name: req.body.name, password: hashedPassword };
    users.push(user);
    res.status(201).json({
      status: "success",
      data: {
        user
      }
    });
  } catch {
    res.status(500).json({
      status: "failed"
    });
  }
});

app.post("/users/login", async (req, res) => {
  const user = users.find(user => user.name === req.body.name);
  if (user === null) {
    return res.status(400).json({status: "failed",message: "User not found"})
    }
    try {
      if (await bcrypt.compare(req.body.password, user.password)){
        res.json({status: "Success", message: "User Logged In"})
      } else {
        res.json({status: 'Failed', message: "Not Allowed"})
      }
    } catch {
      res.status(500).json({status: "failed"})
  }
  });

// Server
const port = 3000;
app.listen(port);
console.log(`Server is running on port: ${port}`);
