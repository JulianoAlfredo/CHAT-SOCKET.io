
import './App.css';
import { io } from "socket.io-client";
import {useEffect, useState } from 'react';
import { controller_previousMessage, controller_auth } from './controllers/socket.controllers';
import Message from './modals/Messages/modal.message';
const skt = io('http://192.168.0.13:3001')
 
function App() {

    const [mesg, setMesg] = useState("")
    
    function sendMessage(){
      let arrMsg = {
        user: localStorage.getItem("username"),
        message: mesg
      }
      skt.emit("sendMessage", arrMsg)
    }
    useEffect(() =>{
      controller_previousMessage()
      controller_auth()
    }, [])
    
  return (
    <div className="App">
           <form id='chat'>
            <Message /> 
              <div className='message'>
                  <input onChange={(evt) =>{setMesg(evt.target.value)}}  placeholder='Digite sua mensagem' name='msg'/>
                  <button onClick={(e) =>{sendMessage(); e.preventDefault()}}>Enviar mensagem</button>
              </div>
           </form>
    </div>
  );
}

export default App;
