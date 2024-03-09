const express = require("express");
const pool = require("./db");

const router = express.Router();

// Delete a record from the "altid" table
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  const query = `DELETE FROM altid WHERE id = ?`;

  pool.query(query, [id], (err, result) => {
    if (err) {
      console.error("Error deleting data:", err);
      res
        .status(500)
        .json({ error: "Failed to delete data from the database" });
    } else {
      console.log("Data deleted successfully!");
      res.json({ message: "Data deleted successfully!" });
    }
  });
});

module.exports = router;
