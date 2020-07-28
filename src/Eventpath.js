import React,{Component} from 'react';
import RCalender from './ReactCalender.js';
import Event from './Event.js'
import CreateEvent from './CreateEvent';
import Header from "./Header";
import axios from 'axios';
// import {connect} from 'react-redux';



    class Eventpath extends Component{
      constructor(props){
        super(props)
        this.state ={
          event:[],
          rname: localStorage.getItem('roomname'),
          dummy:{
            date:"",
            content:"",
            id:""
          }
        }
      }

      componentWillMount(){

          let temp = (localStorage.getItem('roomname'));
          localStorage.setItem('roomname',temp);

        axios.get('https://chat-app-couple.herokuapp.com/room/getEvents',{
         params: {
           room:temp
          }
         }
        )
        .then(res =>{
          
          console.log(res);
          // console.log("once");
          this.setState({
            event:res.data.events
          })

 
        }).catch(err=>{
            console.log(err);
        })
      }


    addEvent = (newEvent) =>{
    console.log(this.state.rname);
    console.log(newEvent.date);
    console.log(newEvent.content);
    axios({
        method:"POST",
        url:'https://chat-app-couple.herokuapp.com/room/createEvent',
        params:{
          room:this.state.rname,
          date:newEvent.date,
          content:newEvent.content
        }
      }).then(res =>{
        console.log(res);
        localStorage.setItem('tempid', res.data.eventid)
        window.location.reload(true);
       


      })
      
      
      .catch(err=>{
        console.log(err);
      })
      
      
      
      this.setState(prevState => ({
        event: [...prevState.event, newEvent]
      }))
      // window.location.reload(true);
      console.log(this.state.event)
 
  }

   deleteEvent= (id,del) =>{


    axios.delete('https://chat-app-couple.herokuapp.com/room/deleteEvent', {data:{_id:id,room:this.state.rname}}) 
    .then(res =>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })

    this.setState({
      event: this.state.event.filter((_, i) => i !== del)
    });
    console.log(this.state.event);
    
 
  }
 


  render(){

  return (
    <div >
    <Header />
    <div className="eventmain" >
    <div className='caldiv'>
    <div className='calpadding'>
    <RCalender />
    </div>
    </div>
    <div className='eventdiv'>
  

    <CreateEvent onAdd={this.addEvent} />
    
     { this.state.event.map((noteItem, index) => {
        return (
          <Event
            key={index}
            iden={index}
            id={noteItem._id}
            title={noteItem.date}
            content={noteItem.content}
            onDelete={this.deleteEvent}
          />
        );
      })}
      </div>
      </div>
    </div>
  );



}
}
// const mapStatetoProps =(state)=>{
//   return {
//       roomname: state.roomname 
//   }
// }
// const mapDispatchtoProps =(dispatch) =>{
//  return  {
//    changeroomName: (newName) => {dispatch({type: 'CHANGE_NAME', name:newName})}
//  }
// }

// export default connect(mapStatetoProps , mapDispatchtoProps ) (Eventpath);
export default Eventpath;
