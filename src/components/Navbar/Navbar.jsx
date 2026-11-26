import styles from './Navbar.module.css'
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return(
    <div className={styles.wrapper}>
      <h1 className={styles.textHeader}>WN.</h1>
      <span className={styles.border}></span>

      <nav className={styles.navBar}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>
          Home
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? styles.active : ""}>
          Projects
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ""}>
          About
        </NavLink>
      </nav>

      <span className={styles.border}></span>
      <div className={styles.contact}>
        <div className={styles.textemail}>Email</div>
        <a href="mailto:your@email.com">wilmanorman999@gmail.com</a>

        <div className={styles.textemail}>Phone</div>
        <a href="tel:+46700000000">+46 70 080 54 58</a>
      </div>
    </div>
  )
}

export default Navbar