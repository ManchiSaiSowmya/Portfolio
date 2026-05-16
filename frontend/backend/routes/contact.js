const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
    const { name, email, message } = req.body;

    db.query(
        "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)",
        [name, email, message],
        (err) => {
            if(err) throw err;
            res.send("Message sent successfully");
        }
    );
});

module.exports = router;