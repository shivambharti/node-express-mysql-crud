const db = require('../models/dbConnection')
const mysql = require('mysql')
const index = (req, res) => {
  res.send('api testing')
}

const data = (req, res) => {
  res.send('this is data')
}

const getUsers = (req, res) => {
  const query = "select * from users";

  db.query(query, function (err, result) {
    if (err) throw err;

    res.json(result);
  });
}

const createUser = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  if (!name) {
    return res.status(400).send({ error: true, message: 'Please provide Name' });
  }

  if (!email) {
    return res.status(400).send({ error: true, message: 'Please provide Email' });
  }

  const insertQuery = "insert into users (name,email) values(?,?)";
  const query = mysql.format(insertQuery, [name, email]);
  db.query(query, function (err, result) {
    if (err) throw err;
    res.json('Users created successfully');

  });
}

const updateUser = (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const email = req.body.email;

  if (!id) {
    return res.status(400).send({ error: true, message: 'Please provide User Id' });
  }
  if (!name) {
    return res.status(400).send({ error: true, message: 'Please provide Name' });
  }

  if (!email) {
    return res.status(400).send({ error: true, message: 'Please provide Email' });
  }
  var updateQuery = "update users set name=?, email=? where id=? ";
  const query = mysql.format(updateQuery, [name, email, id]);

  db.query(query, function(err, result) {
      if (err) throw err;
      res.json('Users updated successfully');
  });
}

const deleteUser = (req, res) => {
  const id = req.body.id;

  if (!id) {
    return res.status(400).send({ error: true, message: 'Please provide User Id' });
  }

  const deletequery = "DELETE FROM users WHERE id =? ";
  var query = mysql.format(deletequery, [id]);
  db.query(query, function(err, result) {
      if (err) throw err;
      res.json('Users deleted successfully');
  });

}
module.exports = { index, data, getUsers, createUser,updateUser,deleteUser }