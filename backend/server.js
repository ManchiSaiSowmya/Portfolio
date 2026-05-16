const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const projectRoutes = require("./routes/projects");
const contactRoutes = require("./routes/contact");

app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
    res.send("Portfolio Backend Running");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});