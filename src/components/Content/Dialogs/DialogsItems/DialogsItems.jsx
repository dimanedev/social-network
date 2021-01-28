import s from './DialogsItems.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import React from "react";

const DialogsItems = (props) => {

  let dialogsElements = props.dialogsData.map(el => (
      <DialogsItem name={el.name} id={el.id} avatarAddress={el.avatarAddress}/>
  ));

  return (
      <div>
        {dialogsElements}
      </div>
  )
}

export default DialogsItems;