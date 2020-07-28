import React,{useState} from 'react';




function CreateEvent (props){

//     const [eventdata, setEventdata]=useState({
//         date:'',
//         event:''
//     });

//     function change(e){
//         const {name , value} = e.target;
//         setEventdata(prevEvent =>{
//             return {
//                 ...prevEvent,
//                 [name]:value
//             };
//         });
//         console.log()
//     }

//     function submit(event){
//         event.preventDefault();
//         props.onAdd(eventdata);
//         // setEventdata({
//         //     date:"",
//         //     content:""
//         // })
//     }

//     return(
//         <div>
//         <form>
//            <label>Date:</label><input onChange={change} value={eventdata.date} placeholder="Date"></input>
//            <label>Event:</label><input onChange={change} value={eventdata.event} placeholder="Event"></input> 
//            <button onClick={submit}> Add </button>
//         </form>
//         </div>
//     )
// }


const [eventdata, setEventdata] = useState({
    date: "",
    content: "",
    _id:""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setEventdata(prevEvent => {
      return {
        ...prevEvent,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(eventdata);
    setEventdata({
      date: "",
      content: "",
      _id:""
    });
    event.preventDefault();
  }

  return (
    <div className="firsteventdiv">
    <h1 className='eventheading'>Create a event ...</h1>
      <form>
 
      <label className='eventlabel'>Date</label>
        <input
          className='eventinput'
          name="date"
          onChange={handleChange}
          value={eventdata.date}
          placeholder="Date"
        />
        <label className='eventlabel'>Event</label>
        <input
          className='eventinput'
          name="content"
          onChange={handleChange}
          value={eventdata.content}
          placeholder="Event"
          
        />
        <button className='eventadd' onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}
export default CreateEvent;