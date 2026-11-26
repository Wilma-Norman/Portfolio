import styles from './About.module.css'
import { FaFilePdf } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const About = () => {
    return (
        <div className={styles.wraper}>
            
                <div className={styles.sectionOne}>                                       
                    <div className={styles.picture}>
                        <div className={styles.textPicture}>
                           <h1 className={styles.header}>Wilma Norman</h1>   
                           <p className={styles.myText}>Degree in Frontend / App Development, summer 2025</p>
                        </div>                                         
                        <img className={styles.mePicture} src="/me.png" alt="bild" />
                    </div>                            
                    <div className={styles.aboutMeWraper}>
                        <div className={styles.aboutMe}>
                            <p className={styles.aboutMeHeader}>About me</p>
                            <p>Hi! I'm Wilma Norman, a 23-year-old frontend developer from Stockholm, Sweden.<br />My interest in web development started in high school, when I built my first website using a website builder. That experience sparked my curiosity about how websites actually work and eventually led me to study Frontend and App Development.<br /><br />
                            I graduated in 2025, and my recent experience includes working as a Product Developer & Operations at a startup, where I focused on frontend development and website maintenance. Working with SvelteKit, TypeScript and Tailwind CSS gave me the opportunity to take on responsibility, learn new technologies and develop my skills in a real-world environment.<br /><br />
                            I'm a positive and social person who enjoys solving problems, exploring new ideas and creating user-friendly digital experiences. I value good communication, structure and teamwork, and I'm always curious to learn more and become a better developer.
                            </p>
                        </div>
                    </div>
                    <div className={styles.contactGroup}>
                        <div className={styles.wrapertel}>
                    <p className={styles.email}>
                        <FaEnvelope className={styles.emailicon}/>
                        wilmanorman999@gmail.com
                    </p>
                    <p className={styles.number}>
                        <FaPhone className={styles.telicon}/>
                        076-080 54 48
                    </p>
                    </div>
                    <div className={styles.wraperCv}>
                        <a className={styles.linkedIn} 
                        href="https://www.linkedin.com/in/wilma-norman-06722225b/"
                        target="_blank"
                        rel="noopener noreferrer"> 
                        LinkedIn
                    </a>                    
                    <a className={styles.link} 
                        href="/Cv.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer">                           
                            <FaFilePdf className={styles.icon} />
                        <span>Mitt CV</span>                        
                    </a>   
                    </div>   
                    </div>                                      
                </div>           
        </div>
    )
  }

  export default About