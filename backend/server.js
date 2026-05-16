const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Sample projects data (NO DATABASE)
const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "My first full-stack portfolio website"
  },
  {
    id: 2,
    title: "Todo App",
    description: "Task management app using JavaScript"
  }
];

// API: Get projects
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

// API: Contact form (just logs data)
app.post("/api/contact", (req, res) => {
  console.log(req.body);
  res.json({ message: "Message received successfully!" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});