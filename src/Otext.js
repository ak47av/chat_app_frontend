import React, { Component } from "react";
const logo = require('./user2.png');

class Otext extends Component{

render(){

  return (
   
    <div id="chat-message-list">
    <div className="message-row other-message">
        <div className="message-content">
          <img src={logo} />
          <div className="message-text"> {this.props.text}</div>
          <div className="message-time">Time</div>
        </div>
      </div>
    </div>

  
 
  );
}
}

export default Otext;