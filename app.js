const db = require("./db");

// Insert user
const user = {
  name: "Moses",
  email: "moses@email.com"
};

db.query(
  "INSERT INTO users (name, email) VALUES (?, ?)",
  [user.name, user.email],
  (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log("User inserted:", result.insertId);
    }
  }
);

// Select all users
db.query("SELECT * FROM users", (err, results) => {
  if (err) {
    console.error(err);
  } else {
    console.log(results);
  }
});
