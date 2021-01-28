import s from './Friends.module.css';
import {NavLink} from "react-router-dom";

const Friends = (props) => {

  let friendsElements = props.friendsData.map( el => (
      <div className={s.item}>
        <NavLink to={`id${el.id}`}>
          <img src={el.avatarAddress} alt='avatar' className={s.avatar}/>
        </NavLink>
        <NavLink to={`id${el.id}`} className={s.name}>
          <p>{el.name}</p>
        </NavLink>
      </div>
  ))

  return (
    <div className={s.friendsBlock}>
      <NavLink to='/friends' className={s.header} activeClassName={s.activeLink}><h3>Friends</h3></NavLink>
      {friendsElements}
    </div>
  );
}

export default Friends;