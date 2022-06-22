const index=(req,res)=>{
    res.send('api testing')
}

const data=(req,res)=>{
  res.send('this is data')
}

module.exports={index,data}