import React, { useState } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';


function CreateRoom(props){

    const [state, setState] = useState({
        user1: "",
        user2: ""
      });

    console.log(props.roomname);

    function changeH(event){
        const { name, value } = event.target;

        setState(prevEvent => {
          return {
            ...prevEvent,
            [name]: value
          };
        });
        
    }

    function submitHandle(e){
        e.preventDefault()
        console.log(state)

        //  props.changeroomName("Carry")

        // axios.post("http://localhost:8080/auth/createRoom", state)
        axios({
            method:"POST",
            url:"https://chat-app-couple.herokuapp.com/auth/createRoom",
            data:state
          })
        .then(res =>{
            console.log(res)
            if(res.data.message ==="Room created!"){
              localStorage.setItem("roomname",res.data.room)
              localStorage.setItem('Other', state.user2);
              props.history.push("/event");
            }

        }).catch(err=>{
            console.log(err);
        })
    }


    return(
       <div>
       {/* <form onSubmit={submitHandle}>
           <label>User 1</label>
           <input onChange={changeH} name="user1" value={state.user1}></input>
           <label>User 2</label>
           <input onChange={changeH} name="user2" value={state.user2}></input>
           <button>Create Room</button>
           </form> */}
           <div className='crnav'>
           <h1 className='crheading'>Couplera</h1>

           </div>
          
           <div className='carddiv'>
           
           <div className='crcard'>
           <h3 className="cardtitle"> Let's create a room with your loved one...</h3>
           <form onSubmit={submitHandle}>
           <label className='cardlabel'>Your Username</label>
           <input className="cardip" onChange={changeH} name="user1" value={state.user1}></input>


           <label className='cardlabel'>Your partner's name</label>
           <input className="cardip" onChange={changeH} name="user2" value={state.user2}></input>
           <button className='crbtn'>Create Room</button>
           </form>
           </div>
           </div>
          
           {/* <div className='carddiv'>
             <div className='crcard'>
             <label className="cardlabel">Your name </label>
             <form onSubmit={submitHandle}>
             <input className="cardip" onChange={changeH} name="user1" value={state.user1}> </input>
              </form>
             </div> */}
           {/* </div> */}
           {/* <div className='carddiv2'>
             <div className='crcard'>Hi</div>
           </div> */}
           
       </div> 
    );
}
const mapStatetoProps =(state)=>{
  return {
      roomname: state.roomname 
  }
}

const mapDispatchtoProps =(dispatch) =>{
 return  {
   changeroomName: (newName) => {dispatch({type: 'CHANGE_NAME', name:newName})}
 }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(CreateRoom);