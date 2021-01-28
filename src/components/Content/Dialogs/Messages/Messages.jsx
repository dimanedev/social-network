import s from './Messages.module.css';
import Message from "./Message/Message";
import React from "react";
import {createRef} from "react/cjs/react.production.min";

const Messages = (props) => {

  let messagesElements = props.messagesData.map(el =>
      <Message message={el.message} id={el.id}/>
  );

  let newMessage = createRef();

  let addMessage = () => {
    props.addMessage();
  }

  let updateNewMessageText = () => {
    let text = newMessage.current.value;
    props.updateNewMessageText(text);
  }

  return (
      <div>
        {messagesElements}
        <textarea
            ref={newMessage}
            onChange={updateNewMessageText}
            value={props.newMessageText}/>
        <button onClick={addMessage}>send</button>
      </div>
  );
}

export default Messages;