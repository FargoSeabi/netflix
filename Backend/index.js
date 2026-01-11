
const http = require("http");
const mysql = require("mysql2");

// MySQL connection

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "netflix_user",
  password: "netflix123",
  database: "netflix"
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database");
});


// Create server
const server = http.createServer((req, res) => {
  // Allow frontend access (CORS)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  // Home route
  if (req.url === "/i" && req.method === "GET") {
    res.end(JSON.stringify({ message: "Netflix Clone API is running" }));
  }

  // Get movies
  else if (req.url === "/movies" && req.method === "GET") {
    const query = "SELECT * FROM movies";

    db.query(query, (err, results) => {
      if (err) {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: "Database error" }));
      } else {
        res.end(JSON.stringify(results));
      }
    });
  }

  // Route not found
  else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = db;