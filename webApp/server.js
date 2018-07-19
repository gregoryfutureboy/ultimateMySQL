const express = require("express");
const ejs = require('ejs');
const bodyParser = require('body-parser');
const faker = require('faker');
const mysql = require('mysql');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

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
    res.render('home', {count: count});
  })
})

app.post('/register', (req, res) => {
  let email = {
    email: req.body.email
  }
  let sql = 'INSERT INTO users SET ?';
  db.query(sql, email, (err, results) => {
    if(err) throw err;
    res.send('Thanks for joining!');
  })
})

app.listen(3000, () => console.log("listening on port 3000"));