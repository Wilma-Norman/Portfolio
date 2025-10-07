/*
import { useEffect } from "react";
import styles from "./Header.module.css";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.wraperHeader}`);
      if (window.scrollY > 10) {
        header.classList.add(styles.scrolled);
      } else {
        header.classList.remove(styles.scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.wraperHeader}>
      <h1 className={styles.header}>Raspose</h1>
    </header>
  );
};

export default Header;
*/
