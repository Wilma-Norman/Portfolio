import styles from "./Projects.module.css";
import ProjectPopup from "../ProjectPopup/ProjectPopup";
import DUIUContent from "../PopupContent/Duiu";
import ZooContent from "../PopupContent/Zoo";
import FoodContent from "../PopupContent/Food";

const Projects = () => {
return(    

    
<wraper className={styles.wraper}>
    <div className={styles.intro}>
    <h1>Selected Work.</h1>
    <h2>A collection of my work</h2>
    <p className={styles.headerText}>
      Here you'll find a selection of projects I've worked on,
      from real-world development to personal and school projects.
      Each one has given me the opportunity to explore new
      technologies, solve problems and grow as a developer.
    </p>
  </div>
    <div className={styles.omg}>
        <div className={styles.sectionwrapper}>
            <div className={styles.duiu}>
                <p className={styles.nameOfProject}>DUIU</p>                
                <a className={styles.projectText} href="https://business.duiu.app/">
                <div className={styles.imageWraper}>
                    <img className={styles.img} src="/business.jpg"/>
                </div>
                </a> 
                <div className={styles.wraperSummary}>
                    <p className={styles.company}>MonoDigital AB - Social Media Platform</p>
                    <p className={styles.summary}>My latest project at MonoDigital AB, where I contributed to the development of a social media platform connecting brands and consumers through video competitions.</p>
                    <p className={styles.tectStack}>Tech stack: SvelteKit, TypeScript, JavaScript, Tailwind CSS</p>
                </div>                
            </div>
           <ProjectPopup>
                <DUIUContent />
            </ProjectPopup>
        </div>
        <div className={styles.sectionwrapper}>
            <div className={styles.duiu}>
                <p className={styles.nameOfProject}>Zoo</p>                
                <a className={styles.projectText} href="https://zoo-bice.vercel.app/">
                <div className={styles.imageWraper}>
                    <img className={styles.img} src="/zoo.png"/>
                </div>
                </a>
                <div className={styles.wraperSummary}>
                    <p className={styles.company}>Zoo Website - Animal Information</p>
                    <p className={styles.summary}>A school project where I developed an interactive zoo website showcasing different animal species, with information and facts about each animal.</p>
                    <p className={styles.tectStack}>Tech stack: React, JavaScript, CSS Modules</p>
                </div>                
            </div>
            <ProjectPopup>
                <ZooContent />
            </ProjectPopup>
        </div>
        <div className={styles.sectionwrapper}>
            <div className={styles.duiu}>
                <p className={styles.nameOfProject}>Recipie Finder</p>                
                <a className={styles.projectText} href="https://dynamic-routing-sepia-six.vercel.app/">
                <div className={styles.imageWraper}>
                    <img className={styles.img} src="/recipeFinder.png"/>
                </div>
                </a> 
                <div className={styles.wraperSummary}>
                    <p className={styles.company}>Recipe Finder - Recipe Discovery Platform</p>
                    <p className={styles.summary}>Explore food categories and discover new recipes. Save your favorite dishes to your personal profile. Revisit saved recipes to view ingredients and instructions.</p>
                    <p className={styles.tectStack}>Tech stack: React, TypeScript, Tailwind CSS, API</p>
                </div>                
            </div>
            <ProjectPopup>
                <FoodContent />
            </ProjectPopup>
        </div>
        </div>
</wraper>

)
}

export default Projects

