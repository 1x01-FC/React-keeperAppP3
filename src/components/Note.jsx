import React from "react";

function Note(props) {

  function clickDel(){
    props.onDel(props.id)
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={clickDel}>DELETE</button>
    </div>
  );
}

export default Note;
