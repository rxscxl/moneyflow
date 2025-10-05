import style from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={style.sidebarWrapper}>
      <nav className={style.sidebarNav}>
        <ul className={style.sidebarNavList}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </nav>
    </aside>
  );
};

export { Sidebar };
