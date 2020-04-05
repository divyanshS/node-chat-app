const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').Server(app)
const io = require('socket.io')(http)
let PORT = 3000;
app.use(express.static(__dirname));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

var messages = [
    {'name': 'System', 'message': 'Welcome to chat-app!'}
]
app.get('/messages', (req, res) => {
    res.send(messages)
});
app.post('/messages', (req, res) => {
    messages.push(req.body)
    io.emit('message', req.body)
    res.sendStatus(200)
}); 

io.on('connection', (socket) => {
    
})
let server = http.listen(PORT, (err, succ) => {
    console.log(`Serving app on: ${server.address().port}`)
});
