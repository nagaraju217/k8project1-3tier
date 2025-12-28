const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "rootpass",
  database: "testdb"
});

app.get("/", (req, res) => {
  db.query("SELECT 'Hello from Backend API' AS message", (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
