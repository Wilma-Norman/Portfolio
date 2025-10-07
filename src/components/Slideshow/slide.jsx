import styles from './Slide.module.css'
import { FaFilePdf } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Slideshow= () => {
    return (
        <div className={styles.wraper}>
            <div className={styles.box}>
                <div className={styles.sectionOne}>                    
                    <div className={styles.picture}>
                        <h1 className={styles.header}>Wilma Norman</h1>
                        <img className={styles.mePicture} src="/me.png" alt="bild" />
                    </div>                        
                    <p className={styles.myText}>Examen inom Frontend / App Developer</p>
                    <p>
                        <FaEnvelope className={styles.email} />
                        wilmanorman999@gmail.com
                    </p>
                    <p>
                        <FaPhone className={styles.number} />
                        076-080 54 48
                    </p>
                    <a className={styles.linkedIn} 
                        href="https://www.linkedin.com/in/wilma-norman-06722225b/"
                        target="_blank"
                        rel="noopener noreferrer"> 
                        LinkedIn
                    </a>
                    <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
                           <div className={styles.cvBox}>
                            <FaFilePdf className={styles.icon} />
                            <span>Mitt CV</span>
                        </div>
                    </a>                    
                </div>
                <div className={styles.sectionTwo}>
                    <div className={styles.projects}>Mina projekt</div>
                    <a href="https://zoo-bice.vercel.app/">
                        <div className={styles.zoo}>
                            <p>My Zoo Page</p>
                        </div>
                    </a>
                    <a href="https://dynamic-routing-sepia-six.vercel.app/">
                        <div className={styles.recipe}>
                            <p>Recipie Finder</p>
                        </div>
                    </a>
                    <a href="https://mui-assignment.vercel.app/">
                        <div className={styles.drink}>
                            <p>Drink Finder</p>
                        </div>
                    </a>
                    <div className={styles.mui}></div>
                    <div className={styles.idk}></div>
                </div>
            </div>
        </div>
    )
  }

  export default Slideshow