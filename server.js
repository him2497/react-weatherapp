const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Listening on Port 3000');
});

app.get('*', function (req, res){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});
