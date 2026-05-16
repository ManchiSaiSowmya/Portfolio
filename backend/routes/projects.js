const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json([
        {
            title: "Portfolio Website",
            description: "Responsive portfolio website"
        },
        {
            title: "Parent Monitoring System",
            description: "Academic tracking platform"
        }
    ]);
});

module.exports = router;