import React, { Component } from "react";

// function Newtext(props) {

  // const [yes , setYes] = useState(false)

  class Newtext extends Component{


   

  // const date = new Date();
  // var months = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December"
  // ];
  // const mon = months[date.getMonth()];

  // const dnum = new Date().getDate();

  // const t = date.getHours();

  // const min = date.getMinutes();

  // const string = mon + " " + dnum + "," + " " + t + ":" + min;
  // const username =localStorage.getItem('name');

  // if(username === props.usern){
  //   setYes(true);
  //   console.log(yes);
  // }else{
  //   setYes(false)
  //   console.log(yes);
  // }

  
    render(){
  return (
   
    <div id="chat-message-list">
      <div className="message-row you-message">
        <div className="message-content" />
        <div  className="message-text">{this.props.text}</div>
        <div className="message-time">NOthing</div> 
      </div>
    </div>
  
 
  );
}
  }
export default Newtext;