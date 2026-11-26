
import styles from "../ProjectPopup/Popup.module.css";
import ProjectSection from "./ProjectSection";

const ZooContent = () => {
    return (
        <>
            <ProjectSection
                title="Zoo Website - School Project"
                video="/Zoo.mp4"
                description={[
                    "I developed an interactive zoo website as part of a school project, using React. The website features three animal categories: mammals, birds and reptiles, with information about nine different species. Visitors can explore different animals, learn about their characteristics, habitats and diets, and access additional information through individual popups.",

                    "I focused on building reusable components and making the website dynamic by separating the animal information into data objects. This allowed me to use the same components to display different animals and categories without duplicating code. I also implemented navigation between categories using React Router, along with interactive sidebars that allow visitors to smoothly scroll to specific animals."
                ]}
                link="https://github.com/Wilma-Norman/Zoo"
            />
        </>
    );
};

export default ZooContent;
