const app = require('express')();
const server = require('http').createServer(app);
const arrMsg = []
const os = require('os');
let ip = []
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    }
});
app.get("/", function(req, res){
    console.log(req.ip)
})
io.on('connection', (socket) => {
    
 
    os.networkInterfaces()["Wi-Fi"].forEach(x => {
        if (x.family == "IPv4") {
            ip.push(x.address)
        }
    })
    socket.on("previousMessage", (mensagem) =>{
       io.sockets.emit("sendMessages", arrMsg)
    })
    socket.on("sendMessage", (msg) => {
        arrMsg.push({
            mensagem: msg,
            ip: ip[0]
        })
        io.sockets.emit("msgReceived", arrMsg)
    })
    socket.on("typingMessage", (typingMessage) =>{
        
    })
})


server.listen(3001, `192.168.0.13`, function () {
    console.log('server on')
})