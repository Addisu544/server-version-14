const express = require("express");
const multer = require("multer");
const path = require("path");
const pool = require("./db");

const router = express.Router();

// Configure multer for handling multipart/form-data
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Specify the path to the uploads directory
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// Handle image upload and data insertion
router.post("/", upload.single("img"), (req, res) => {
  const { id, title, category, price, desc } = req.body;
  const imagePath = req.file.path;

  // Save the data and image path to the database
  const query = `INSERT INTO altid (id, title, category, price, img, \`desc\`) VALUES (?, ?, ?, ?, ?, ?)`;
  const values = [id, title, category, price, imagePath, desc];

  pool.query(query, values, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res
        .status(500)
        .json({ error: "Failed to insert data into the database" });
    } else {
      console.log("Data inserted successfully!");
      res.json({ message: "Data inserted successfully!" });
    }
  });
});

module.exports = router;
