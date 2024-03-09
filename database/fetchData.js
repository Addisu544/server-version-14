const express = require("express");
const pool = require("./db");

const router = express.Router();

// Fetch all data from the "alt" table
router.get("/", (req, res) => {
  const query = `SELECT * FROM altid`;

  pool.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data:", err);
      res.status(500).json({ error: "Failed to fetch data from the database" });
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
