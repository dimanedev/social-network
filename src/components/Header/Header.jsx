import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.header}>
      <NavLink to='/news'>
        <img src='https://cdn.worldvectorlogo.com/logos/vine-icon.svg' alt='logo' />
      </NavLink>
    </header>
  );
}

export default Header;