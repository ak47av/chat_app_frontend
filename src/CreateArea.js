import React, { Component } from "react";

// function CreateArea(props) {
//   const [note, setNote] = useState({
//     text: ""
//   });

//   function handleChange(event) {
//     const value = event.target.value;

//     setNote(value);
//   }

//   function submitNote(event) {
//     props.onAdd(note);
//     setNote({
//       text: ""
//     });
//     event.preventDefault();
//   }

//   return (
//     <div className="flex">
//       <div className="bdiv">
//         <form>
//           <input
//             type="text"
//             placeholder="Enter your text"
//             className="inputbox"
//             value={note.text}
//             onChange={handleChange}
//           />
//         </form>
//       </div>
//       <div className="bdivt">
//         <button className="inputbutton" onClick={submitNote}>
//           <p className="send">Send</p>
//         </button>
//       </div>
//     </div>
//   );
// }

class CreateArea extends Component{

  constructor(props){
    super(props)

    this.state={
      textmsg:""
    }
  }

  handleChange=(event)=> {
    const value = event.target.value;

    this.setState({
      textmsg:value
    })
  }

  submitNote=(event)=> {
        this.props.onAdd(this.state.textmsg);
      
        this.setState({
          textmsg:""
        })
        event.preventDefault();
      }


  render(){
    return(
    <div className="flex">
      <div className="bdiv">
        <form>
          <input
            type="text"
            placeholder="Enter your text"
            className="inputbox"
            value={this.state.text}
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


    );
  }
}



export default CreateArea;