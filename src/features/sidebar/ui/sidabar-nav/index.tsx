import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { ISidebarNav, navigation } from "../../model";

import styles from "./index.module.css";

export const SidebarNav: FC<ISidebarNav> = ({ isClose }) => {
  const location = useLocation();

  return (
    <nav className={`${styles.list} ${isClose && styles["list--hidden"]}`}>
      {navigation.map((nav) => {
        const isActive = location.pathname === nav.path;
        return (
          <li key={nav.id} className={styles.item}>
            <Link
              className={`${styles.link} ${isActive && styles["link--active"]}`}
              to={nav.path}
            >
              {nav.text}
            </Link>
          </li>
        );
      })}
    </nav>
  );
};
