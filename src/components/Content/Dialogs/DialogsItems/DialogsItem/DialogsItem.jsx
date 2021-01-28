import s from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {

  let path = '/dialogs/' + props.id;

  return (
        <NavLink onClick={ () => {
          alert(`id: ${props.id}`);
        }} to={path} className={s.dialogsItem}>
          <img src={props.avatarAddress} className={s.avatar}/>
          <span className={s.name}>
            {props.name}
          </span>
          {/*<div className={s.newMessagesBlock}>*/}
          {/*  <div className={s.newMessagesCount}>*/}
          {/*    4*/}
          {/*  </div>*/}
          {/*</div>*/}
        </NavLink>
  );
}

export default DialogsItem;