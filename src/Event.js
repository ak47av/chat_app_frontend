import React from "react";

function Event(props) {
  console.log(props.title);
  console.log(props.content);
  console.log(props.iden)
  function handleClick() {
    props.onDelete(props.id,props.iden);
    console.log("done");
    
  }


  return (

    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick }>DELETE</button>
    </div>
  );
} 
export default Event;