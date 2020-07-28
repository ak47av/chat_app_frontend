import React, { Component } from "react";
import Message from "./Message.js";
import Createarea from "./CreateArea";
import Newtext from "./Newtext.js";
import Otext from './Otext.js';
import {Link} from "react-router-dom";
import Header from './Header.js'
import io from 'socket.io-client';
import {connect} from 'react-redux';
import  axios from 'axios';
import {getChats} from './actions/chat_actions';

const logo = require('./user2.png');

// function Chatbox(history) {
//     const [texts, setTexts] = useState([]);

//     function addNote(newText) {
//       setTexts(prevTexts => {
//         return [...prevTexts, newText];
//       });
//     }
  
  
//     return (
//       <div>
//         <Header />
  
//         <div className="flex">
//           <div className="left">
//             <img src="" className="onlyimg" />
//             <h2>Person</h2>
//             <h5 className="active">Active 2 hrs ago</h5>
//           </div>
//           <div className="right">
//             <div className="nav">
//               <h1>Person</h1>
//             </div>
//             <div className="scroll">
//               <Message />
//               {texts.map((noteItem, index) => {
//                 return <Newtext key={index} id={index} text={noteItem} />;
//               })}
//             </div>
//           </div>
//         </div>
  
//         <div className="flex">
//           <div className="bottomleft" />
//           <div className="bottomright">
//             <Createarea onAdd={addNote} />
//           </div>
//         </div>
//         <Link to="/logout">
//         <button type="submit" >Logout</button>
//         </Link>
//       </div>
//   );
// }

class Chatbox extends Component{

  // constructor(props){
  //   super(props)
  //   this.state ={
  //     texts:[]
  //   }
  // }

  //    addNote= (newText)=> {
  //     this.setState(prevState => ({
  //       texts: [...prevState.texts, newText]
  //     }))
  //   }

  state={
    textmsg:"",
    // user:{
    //   chatText:"",
    //   room:'',
    //   user:''
    // },
    textarr:[]
  }

  componentDidMount(){
    let server = "https://chat-app-couple.herokuapp.com";
    this.socket = io(server);

    // // this.props.dispatch(getChats());
    // chat-app-couple.herokuapp.com
    console.log(this.props);
    axios.get('https://chat-app-couple.herokuapp.com/room/getPreviousMessages',{
      params: {
        room:localStorage.getItem('roomname')
       }
      }
     ).then(res =>{
       console.log(res);
       console.log(res.data.messages);
       this.props.getMsg(res.data.messages);
      this.setState({
        textarr:res.data.messages
      })
     })
     console.log(this.state.textarr)


    this.socket.on('message',(msg) =>{
      console.log(msg.user);
      this.props.sendMsg(msg);
      console.log('Message from Backend',msg);
    })
  }
  scrollToBottom = () => {
    const { update } = this.refs;
    update.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }

  componentDidUpdate(){
    // var element = document.getElementById("update");
    // element.scrollIntoBottom();
    this.scrollToBottom()

    // var element = document.getElementById("update");
    // element.scrollTop = element.scrollHeight - element.clientHeight;
  }

  handleChange=(event)=> {
    const value = event.target.value;

    this.setState({
      textmsg:value
    })
  }

  submitNote=(event)=> {
        // this.props.onAdd(this.state.textmsg);
        event.preventDefault();
        console.log(this.props.chatArray);
        let room = localStorage.getItem('roomname');
        let user = localStorage.getItem('name');
        let chatText = this.state.textmsg;
        console.log(chatText);
        console.log(this.state.textmsg);
        // this.setState({
        //   user:{
        //   chatText:chatText,
        //   room:room,
        //   user:user
        //   }
        // })
        
        this.socket.emit('sendMessage' , 
          chatText,
          room,
          user
        )

        // this.setState(prevState => ({
        //   textarr: [...prevState.textarr,this.state.user ]
        // }))
        console.log(this.state.textarr);
        this.setState({
          textmsg:""
        })
        
      }




  render(){
    return(

      <div>
        <Header />
        <div className='boxtype'>
        <div className="flex">
          <div className="left">
            <img src={logo} className="onlyimg" />
            <h2 className='othername'>{localStorage.getItem('Other')}</h2>
            
          </div>
          <div className="right">
            {/* <div className="nav">
              <h1>Person</h1>
            </div> */}
            <div ref="update" className="scroll">
              {/* <Message /> */}
               {console.log(this.props.chatArray)} 
              {this.props.chatArray.map((ping, index) => {
                if(ping.user===localStorage.getItem('name')){
                  return <Newtext key={index} id={index} usern={ping.user} text={ping.content} time={ping.createdAt}/>;

                }else {
                  return <Otext key={index} id={index} usern={ping.user} text={ping.content} time={ping.createdAt} />;
                }
                
              })} 

            </div>

          </div>
        </div>
  
        <div className="flex">
          <div className="bottomleft" />
          <div className="bottomright">
            {/* <Createarea onAdd={this.addNote} /> */}

            <div className="flex">
              <div className="bdiv">
                <form>
                  <input
                    type="text"
                    placeholder="Enter your text"
                    className="inputbox"
                    value={this.state.textmsg}
                    onChange={this.handleChange}
                  />
                </form>
              </div>
              <div className="bdivt">
                <button className="inputbutton" onClick={this.submitNote}>
                  <p className="send">Send</p>
                </button>
              </div>
            </div>

          </div>
        </div>
        </div>
        
      </div>

    );
  }
}

const mapStatetoProps = state =>{
  return{
    chatArray: state.chatArray 
  }
}

const mapDispatchToProps = dispatch =>{
  return {
      getMsg:(arr) =>  dispatch({type:'GET_CHATS' , arr:arr }),
      sendMsg:(newmsg) => dispatch({type:'ADD_MSG' , newmsg:newmsg})
      
  }
}



export default connect(mapStatetoProps,mapDispatchToProps) (Chatbox);