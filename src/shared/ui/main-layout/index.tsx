import { Outlet } from "react-router-dom";
import { Sidebar } from "../../../features/sidebar/ui";

import styles from "./index.module.css";

export const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};
