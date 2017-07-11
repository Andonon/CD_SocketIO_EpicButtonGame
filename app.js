const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static/'));
app.set('views', __dirname + '/views/');

app.get('/', function(req, res){
    res.render('index');
});

port = 8000;
app.listen(port, function(){
    console.log("Listening on port ", port);
});
