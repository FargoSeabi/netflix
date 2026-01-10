const mysql = require("mysql2");

// Create connection
const mysql = require("mysql2");

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

module.exports = connection;




