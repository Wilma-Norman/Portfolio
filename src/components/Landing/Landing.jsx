import styles from "./Landing.module.css"

const Landing = () => {
    return( 
        <div className={styles.wraper}>
            <p className={styles.header}>Wilmas Portfolio</p>
            <p className={styles.title}>Frontend Developer</p>
            <p className={styles.text}>I build creative, responsive and user-friendly digital experiences, with a passion for frontend development and thoughtful design.</p>
        </div>
    )
}

export default Landing