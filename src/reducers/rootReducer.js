const initState = {
    chatArray:[]
    
}

const rootReducer =(state = initState, action) =>{
    if(action.type === "GET_CHATS"){
        let changed = action.arr
        console.log(changed);
        return {
            ...state,
            chatArray:changed
        }
    }
    else if (action.type === 'ADD_MSG'){
        let add = action.newmsg 
        console.log(add);
        return{
            ...state,
            chatArray:state.chatArray.concat(add)
        }
    }
    
    return state;
}

export default rootReducer;