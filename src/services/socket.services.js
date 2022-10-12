import { io } from "socket.io-client";

const skt = io('http://192.168.0.13:3001')


export function previousMessage(){
    skt.emit("previousMessage", "send")
}


