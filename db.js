const mysql = require("mysql2");

// Create connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_mysql_password",
  database: "myapp"
});

// Connect
connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database!");
  }
});

module.exports = connection;
