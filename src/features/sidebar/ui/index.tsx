import { SidebarNav } from "./sidabar-nav";
import { Button } from "../../../shared/ui/button";
import { useSidebar } from "../hook";

import styles from "./index.module.css";

export const Sidebar = () => {
  const { isClose, toggleSidebar } = useSidebar();

  return (
    <aside className={`${styles.aside} ${isClose && styles["aside--close"]}`}>
      <div className={styles.actions}>
        <Button style={styles.button} type={"button"} handler={toggleSidebar}>
          X
        </Button>
      </div>
      <SidebarNav isClose={isClose} />
    </aside>
  );
};
