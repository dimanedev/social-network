import s from './Messages.module.css';
import Message from "./Message/Message";
import React from "react";
import {createRef} from "react/cjs/react.production.min";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../../redux/state";

const Messages = (props) => {

  let messagesElements = props.messagesData.map(el =>
      <Message message={el.message} id={el.id}/>
  );

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  }

  let updateNewMessageText = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewMessageActionCreator(text));
  }

  return (
      <div>
        {messagesElements}
        <textarea
            onChange={updateNewMessageText}
            value={props.newMessageText}/>
        <button onClick={addMessage}>send</button>
      </div>
  );
}

export default Messages;