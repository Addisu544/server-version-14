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

// Handle image upload and data update
router.put("/:id", upload.single("img"), (req, res) => {
  const { id } = req.params;
  const { title, category, price, desc } = req.body;
  const imagePath = req.file ? req.file.path : null;

  // Build the update query based on the provided fields
  let updateQuery = "UPDATE altid SET";
  const updateValues = [];

  if (title) {
    updateQuery += " title = ?,";
    updateValues.push(title);
  }

  if (category) {
    updateQuery += " category = ?,";
    updateValues.push(category);
  }

  if (price) {
    updateQuery += " price = ?,";
    updateValues.push(price);
  }

  if (desc) {
    updateQuery += " `desc` = ?,";
    updateValues.push(desc);
  }

  if (imagePath) {
    updateQuery += " img = ?,";
    updateValues.push(imagePath);
  }

  // Remove the trailing comma and add the id condition to the query
  updateQuery = updateQuery.slice(0, -1);
  updateQuery += " WHERE id = ?";
  updateValues.push(id);

  pool.query(updateQuery, updateValues, (err, result) => {
    if (err) {
      console.error("Error updating data:", err);
      res.status(500).json({ error: "Failed to update data in the database" });
    } else {
      console.log("Data updated successfully!");
      res.json({ message: "Data updated successfully!" });
    }
  });
});

module.exports = router;
