const express = require("express");
const faker = require('faker');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'join_us'
})

db.connect((err) => {
  if(err) {console.log(err)} 
  console.log('MySQL connected')
})

app.get('/', (req, res) => {
  let query = "SELECT COUNT(*) AS COUNT FROM users";
  db.query(query, (err, results) => {
    if(err) throw err;
    let count = results[0].COUNT;
    res.send(`We have ${count} users`)
  })
})

app.listen(3000, () => console.log("listening on port 3000"));