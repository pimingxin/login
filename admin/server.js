const express = require('express')

const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password : '970311',
  database : 'admin'
})

connection.connect()

const app = express()

app.use(require('cors')())

app.get('/' , (req,res) => {
  res.send('nmsl')
})

app.post('/reg' , (req,res) => {
  let {user, password} = req.body
  console.log(user,password)
})

app.listen(3000,() => {
  console.log('http://localhost:3000')
})