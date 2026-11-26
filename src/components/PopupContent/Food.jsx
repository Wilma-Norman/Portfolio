import styles from "../ProjectPopup/Popup.module.css";
import ProjectSection from "./ProjectSection";

const FoodContent  = () => {
    return (
        <>
            <ProjectSection
                title="Food Website - School Project"
                video="/RecipeFinder.mp4"
                
                description={[
                    "A recipe discovery application built with Next.js, React and TypeScript, using TheMealDB API to dynamically fetch food categories, recipes and detailed recipe information.",
                    "The application includes a username-based login system with predefined demo users, each assigned a favorite food category and a collection of saved recipes. I implemented React Context to manage shared user state across components, allowing the application to keep track of each user's selected category and saved recipes.",
                    "Users can browse different food categories, explore associated recipes and select one category as their favorite. The selected category is then used to fetch and display relevant recipes through TheMealDB API. Individual recipes can be opened to view detailed information, including ingredients and cooking instructions.",
                    "I used React hooks such as useState and useEffect to manage component state and handle API requests. The API integration was implemented using fetch(), async/await and Promise.all() to retrieve recipe information, including multiple saved recipes simultaneously when loading the user's profile.",
                    "The profile page provides a personalized overview of the user's favorite food category and saved recipes, allowing them to revisit previously selected dishes. I also implemented dynamic routing with Next.js to navigate between categories, recipe details and user profiles.",
                    "The interface was built with Tailwind CSS, using responsive utility classes to ensure the application works across different screen sizes. TypeScript was used throughout the project to define data types for users, recipes and categories.",
                ]}
                link="https://github.com/Wilma-Norman/Dynamic-Routing"
                
            />
        </>
    );
};

export default FoodContent;
