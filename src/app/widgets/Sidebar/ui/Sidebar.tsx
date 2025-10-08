import style from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className={style.sidebarWrapper}>
      <nav className={style.sidebarNav}>
        <ul className={style.sidebarNavList}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? style.activeLink : "")}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/transactions"
              className={({ isActive }) => (isActive ? style.activeLink : "")}
            >
              Transactions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/accounts"
              className={({ isActive }) => (isActive ? style.activeLink : "")}
            >
              Accounts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reports"
              className={({ isActive }) => (isActive ? style.activeLink : "")}
            >
              Reports
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) => (isActive ? style.activeLink : "")}
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export { Sidebar };
