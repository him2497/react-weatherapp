const express = require('express');
const app = express();
const path = require('path');

app.use((req, res, next) => {
    if(req.headers['x-forwarded-proto'] === 'https'){
      res.redirect('http://' + req.hostname + req.url);
    }else{
      next();
    }
});

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Listening on Port ' + PORT);
});

app.get('*', function (req, res){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});
