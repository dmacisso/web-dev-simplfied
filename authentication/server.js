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
    console.log(salt);
    console.log(hashedPassword);
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
      
    })
  }
});

// Server
const port = 3000;
app.listen(port);
console.log(`Server is running on port: ${port}`);
