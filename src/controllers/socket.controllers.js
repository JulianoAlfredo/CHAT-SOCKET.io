import {previousMessage} from '../services/socket.services'


export function controller_previousMessage(){
    previousMessage()
}
export function controller_auth(){
    let usr = localStorage.getItem("username")
      if(usr ==  null){
        let usuario = prompt("Digite aqui seu nome de usuario!")
        localStorage.setItem("username", String(usuario))
        console.log(localStorage.getItem('username'))
        return true
      } else{
        return true
      }
}