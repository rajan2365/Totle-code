const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const DATA_PATH = path.join(__dirname, "topics.json");

router.get("/", (req, res) => {
    try {
        const data = fs.readFileSync(DATA_PATH, "utf8");
        const topics = JSON.parse(data);

        let { search, sort } = req.query;
        let filtered = topics;

        // Search filter
        if (search && search.trim() !== "") {
            search = search.toLowerCase();
            filtered = topics.filter(topic =>
                topic.name.toLowerCase().includes(search)
            );
        }

        // Sorting
        if (sort && sort.toLowerCase() === "name") {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        }

        return res.status(200).json(filtered);

    } catch (error) {
        console.error("Server Error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
