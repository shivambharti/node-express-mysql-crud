const db=require('../models/dbConnection')
const mysql=require('mysql')
const index=(req,res)=>{
    res.send('api testing')
}

const data=(req,res)=>{
  res.send('this is data')
}

const getUsers=(req,res)=>{
  const query = "select * from users";

  db.query(query, function(err, result) {
      if (err) throw err;
      
      res.json(result);
  });
}

const createUser = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  if (!name) {
    return res.status(400).send({ error:true, message: 'Please provide Name' });
  }

  if (!email) {
    return res.status(400).send({ error:true, message: 'Please provide Email' });
  }

  
  var insertQuery = "insert into users (name,email) values(?,?)";
  var query = mysql.format(insertQuery, [name,email]);
  db.query(query, function(err, result) {
      if (err) throw err;
      res.json('Users created successfully');

  });
}

module.exports={index,data,getUsers,createUser}