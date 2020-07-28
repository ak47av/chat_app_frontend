import {CHANGE_NAME } from '../types.js'
const initState = {
    roomname:''
}
export default function(state={initState},action){
    switch(action.type){
        case CHANGE_NAME:
            return  {
                ...state,
                roomname:action.name
            } 
    }
}