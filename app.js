const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static/'));
app.set('views', __dirname + '/views/');
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.get('/', function(req, res){
    res.render('index');
});

port = 8000;
const server = app.listen(port, function(){
    console.log("Listening on port ", port);
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
    console.log('connected socket', socket.id)
    socket.on('disconnect', function(){
        console.log("disconnected socket", socket.id)
    });
    socket.on('epicbuttonclick', function(){
        console.log("Epic button click in app.js");
        socket.emit('server_response', {response: "testing"})
    });
});