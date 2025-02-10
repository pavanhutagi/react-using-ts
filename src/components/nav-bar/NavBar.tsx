import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <ul className={styles.navBarContainer}>
      <li>
        <Link to="/pages/home" className={styles.navBarItem}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/pages/contact" className={styles.navBarItem}>
          Contact
        </Link>
      </li>
      <li>
        <Link to="/pages/about" className={styles.navBarItem}>
          About
        </Link>
      </li>
    </ul>
  );
}
