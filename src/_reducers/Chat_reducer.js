import {GET_CHATS } from '../types.js';

const initialState ={
    chat:[]
}

export default function(state={initialState},action){
    switch(action.type){
        case GET_CHATS:
            return { ...state,chats:action.payload }
    }
}