import axios from 'axios';
import {
    GET_CHATS
} from '../types';

export function getChats(){
    const request =  axios.get('http://localhost:8080/room/getPreviousMessages',{
          params: {
            room:localStorage.getItem('roomname')
           }
          }).then(response =>response.data.messages);

        
          return{
              type:GET_CHATS,
              payload:request
          }
}