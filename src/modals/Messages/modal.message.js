
import '../../App.css';
import { io } from "socket.io-client";
import {useEffect, useState } from 'react';
import { controller_auth } from '../../controllers/socket.controllers';
const skt = io('http://192.168.0.13:3001')


export default function Message(onUser){
    const [usuario, setUsuario] = useState("")
    const [rcve, setRcve] = useState([])
    useEffect(() =>{
        if(controller_auth() == true){
            setUsuario(localStorage.getItem("username"))
        }
    })
    skt.on(`msgReceived`, async (rcv)=>{
        setRcve(rcv)
      })
      skt.on("sendMessages", async(rcv) =>{
        setRcve(rcv)
      })
        

  
    return(
        <div className='messageChat'>
            {rcve.map((e, i) =>
              
              e["mensagem"]["user"] == usuario && i
              ? 
              <div className='message-div-me'>
                
                <p>{e[`mensagem`][`message`]}</p>
              </div>
              :

              <div className='message-div'>
                
                <p>{e[`mensagem`][`message`]}</p>
              </div>
              
              )}
        </div>
    )
}