import s from './Dialogs.module.css';
import Messages from "./Messages/Messages";
import DialogsItems from "./DialogsItems/DialogsItems";
import DialogsItem from "./DialogsItems/DialogsItem/DialogsItem";
import Message from "./Messages/Message/Message";

const Dialogs = (props) => {



  return (
      <div className={s.dialogs}>
        <DialogsItems dialogsData={props.state.dialogsData}/>
        <Messages
            messagesData={props.state.messagesData}
            addMessage={props.addMessage}
            newMessageText={props.state.newMessageText}
            updateNewMessageText={props.updateNewMessageText}/>
      </div>
  );
}

export default Dialogs;