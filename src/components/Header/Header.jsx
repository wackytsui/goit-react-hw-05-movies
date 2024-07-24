import { NavLink } from 'react-router-dom';
import css from './Header.module.css'
import { RiMovie2Line } from "react-icons/ri";
import { TbHomeStar } from "react-icons/tb";

export const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? css.linkActive : css.link)}>
         <p> <TbHomeStar /> Home </p>
        </NavLink>
        
        <NavLink 
          to="/movies"
          className={({ isActive }) => (isActive ? css.linkActive : css.link)}>
          <p> <RiMovie2Line /> Movies </p>
        </NavLink>
      </nav>
    </header>
  );
};