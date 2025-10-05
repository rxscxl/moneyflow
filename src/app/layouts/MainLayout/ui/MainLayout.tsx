import { Sidebar } from "@/app/widgets/Sidebar";
import { Outlet } from "react-router-dom";
import style from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <div className={style.mainLayoutWrapper}>
      <Sidebar />
      <main className={style.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};
export { MainLayout };
