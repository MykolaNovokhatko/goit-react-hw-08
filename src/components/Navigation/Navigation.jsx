import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { clsx } from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <ul className={css.nav}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return clsx(css.link, isActive && css.active);
            }}
          >
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }) => {
                return clsx(css.link, isActive && css.active);
              }}
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};