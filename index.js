const express = require('express')
const app = express()
const port = 3000
const route=require('./src/routes/web')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));//Parse body

app.use('/',route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})