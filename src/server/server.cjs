const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

// Create express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL database connection (No password)
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // No password here
  database: "contact_db", // Your database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

// API route to handle contact form submission
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Insert data into the MySQL database
  const query = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error("Error inserting data into MySQL:", err);
      res.status(500).json({ error: "Error saving data" });
    } else {
      res.status(200).json({ success: true, message: "Data saved successfully" });
    }
  });
});

// Start the server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
