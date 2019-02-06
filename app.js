const express = require('express');
const app = express;
app.get('/,' (req, res)=>{
  res.sendFile(__dirname + '/index.html');
})
app.listen(3006);
console.log("Server running on 3006");
