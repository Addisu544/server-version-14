// const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");

const { CharsetToEncoding } = require("mysql2");

// const app = express();
// const port = 2000;

// app.use(express.json());
// app.use(cors());

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mydb",
// });

// connection.connect((err) => {
//   if (err) {
//     console.error("Database connection failed: ", err);
//   } else {
//     console.log("Connected to the database");
//   }
// });

// app.post("/", (req, res) => {
//   const { id, title, category, price, img, desc } = req.body;

//   const query = `INSERT INTO alt (id, title, category, price, img, \`desc\`) VALUES (${id}, '${title}', '${category}', ${price}, '${img}', '${desc}')`;

//   connection.query(query, (err, result) => {
//     if (err) {
//       console.error("Error inserting data: ", err);
//       res.status(500).send("Internal Server Error");
//     } else {
//       console.log("Data inserted successfully!");
//       res.status(200).send("Data inserted successfully!");
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
//PERFECT CODE TO INSERT text FROM CLIENT>>>>>>>>><<<<<<<<<<<<>>>>>>>>>>>><<<<<<<<<<<>>>>>>>>>>>><<<<<<<<<>

// const express = require("express");
// const multer = require("multer");
// const cors = require("cors");
// const path = require("path");
// const mysql = require("mysql2");

// const app = express();
// const port = 2000;

// // Configure multer for handling multipart/form-data
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // Specify the path to the uploads directory
//   },
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       file.fieldname + "_" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// const upload = multer({ storage: storage });

// // Enable CORS
// app.use(cors());

// // Serve static files from the uploads folder
// app.use("/uploads", express.static("uploads"));

// // Create a MySQL connection
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mydb",
// });

// // Connect to the MySQL server
// connection.connect((err) => {
//   if (err) {
//     console.error("Error connecting to the database:", err);
//   } else {
//     console.log("Connected to the database!");
//   }
// });

// // Handle image upload
// app.post("/", upload.single("img"), (req, res) => {
//   const { id, title, category, price, desc } = req.body;
//   const imagePath = req.file.path;

//   // Save the data and image path to the database
//   const query = `INSERT INTO alt (id, title, category, price, img, \`desc\`) VALUES (?, ?, ?, ?, ?, ?)`;
//   const values = [id, title, category, price, imagePath, desc];

//   connection.query(query, values, (err, result) => {
//     if (err) {
//       console.error("Error inserting data:", err);
//       res
//         .status(500)
//         .json({ error: "Failed to insert data into the database" });
//     } else {
//       console.log("Data inserted successfully!");
//       res.json({ message: "Data inserted successfully!" });
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

//up uploadimage in uploads the code that insert image in upload folder and all database info kkk
// Import required modules
// const express = require("express");
// const mysql = require("mysql");
// const path = require("path");

// // Create an instance of the Express application
// const app = express();

// // Create a MySQL connection
// const connection = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "root",
//   password: "",
//   database: "mydb",
// });

// // Connect to the database
// connection.connect((err) => {
//   if (err) {
//     console.error("Error connecting to the database:", err);
//   } else {
//     console.log("Connected to the database");
//   }
// });

// // Define a route to retrieve the image
// app.get("/image/:id", (req, res) => {
//   const id = req.params.id;

//   // Retrieve the image data from the database based on the ID
//   const query = "SELECT img FROM alt WHERE id = ?";
//   const values = [id];

//   connection.query(query, values, (err, result) => {
//     if (err) {
//       console.error("Error retrieving image:", err);
//       res.status(500).json({ error: "Failed to retrieve the image" });
//     } else {
//       if (result.length === 0 || result[0].img === null) {
//         res.status(404).json({ error: "Image not found" });
//       } else {
//         const imageData = result[0].img;
//         res.contentType("image/jpeg");
//         res.send(imageData);
//       }
//     }
//   });
// });

// // Start the server
// app.listen(2000, () => {
//   console.log("Server is running on http://localhost:2000");
// });
//displays image icon in browser

// const express = require("express");
// const cors = require("cors");
// const mysql = require("mysql2");
// const path = require("path");

// const app = express();
// const port = 2000;

// // Enable CORS
// app.use(cors());

// // Serve static files from the uploads folder
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // Create a MySQL connection
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mydb",
// });

// // Connect to the MySQL server
// connection.connect((err) => {
//   if (err) {
//     console.error("Error connecting to the database:", err);
//   } else {
//     console.log("Connected to the database!");
//   }
// });

// // Fetch all data from the "alt" table
// app.get("/", (req, res) => {
//   const query = `SELECT * FROM alt`;

//   connection.query(query, (err, results) => {
//     if (err) {
//       console.error("Error fetching data:", err);
//       res.status(500).json({ error: "Failed to fetch data from the database" });
//     } else {
//       res.json(results);
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
//ULTIMATE DISPLAY IMAGE AND ALL
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const mysql = require("mysql2");

const app = express();
const port = 2000;

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

// Enable CORS
app.use(cors());

// Serve static files from the uploads folder
app.use("/uploads", express.static("uploads"));

// Create a MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database!");
  }
});

// Fetch all data from the "alt" table
app.get("/", (req, res) => {
  const query = `SELECT * FROM alt`;

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data:", err);
      res.status(500).json({ error: "Failed to fetch data from the database" });
    } else {
      res.json(results);
    }
  });
});

// Handle image upload and data insertion
app.post("/", upload.single("img"), (req, res) => {
  const { id, title, category, price, desc } = req.body;
  const imagePath = req.file.path;

  // Save the data and image path to the database
  const query = `INSERT INTO alt (id, title, category, price, img, \`desc\`) VALUES (?, ?, ?, ?, ?, ?)`;
  const values = [id, title, category, price, imagePath, desc];

  connection.query(query, values, (err, result) => {
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

// Delete a record from the "alt" table
app.delete("/data/delete/:id", (req, res) => {
  const id = req.params.id;

  const query = `DELETE FROM alt WHERE id = ?`;

  connection.query(query, [id], (err, result) => {
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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
