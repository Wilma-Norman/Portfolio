
import styles from "../ProjectPopup/Popup.module.css";
import ProjectSection from "./ProjectSection";

const DUIUContent = () => {
    return (
        <>
            <h2 className={styles.title}>My work at DUIU</h2>

            <div className={styles.text}>
                <p>
                    I joined an existing codebase and initially worked
                    alongside another developer. After a few months, I
                    took over the frontend development and became
                    responsible for maintaining and further developing
                    the platforms independently.
                </p>

                <p>
                    I developed the entire frontend of the business
                    platform based on existing UX designs, building
                    its different pages, responsive layouts, animations
                    and API integrations. On the consumer platform,
                    I developed the Events page and built a subscription
                    form integrated with SendGrid.
                </p>

                <p>
                    Throughout the project, I used AI tools as support
                    during development, particularly when getting
                    familiar with the existing codebase, understanding
                    how different parts of the application worked and
                    solving technical challenges. I made sure to
                    understand the code and functionality rather than
                    simply relying on AI-generated solutions.
                </p>
            </div>

            <p className={styles.whatIdid}>Some of my work</p>

            <ProjectSection
                title="My offline page mission"
                video="/offline.mp4"
                showReadMore
                description={[
                    "I was given the task of creating an offline page for DUIU with a space theme. I had the freedom to explore different ideas and was encouraged to take inspiration from other offline pages that also used space-themed designs.",

                    "Before starting the design, I wanted to understand how offline pages actually work. This led me to learn about service workers and how they allow a website to display a custom offline page when a user loses their internet connection. In this case, the user first needs to visit the DUIU website while online. If they later lose their connection and try to navigate to another page, the custom offline page will appear instead.",

                    "When it came to the design, I initially used AI to explore ideas for a space-themed page featuring a black hole. However, no matter how much I refined my prompts, I couldn't quite achieve the result I had in mind.",

                    "Then I remembered a previous project I had built using Three.js, where I experimented with stars and different 3D shapes. The code also allowed users to interact with the scene by zooming in and out and moving around. I decided to reuse parts of that project and combine them with the AI-generated black hole. This gave me the visual direction I was looking for.",

                    "As a final detail, I added DUIU's icons being pulled into the black hole, creating a small interactive-looking touch that made the page feel more connected to the brand."
                ]}
            />

            <ProjectSection
                title="The business platform"
                video="/business.mp4"
                showReadMore
                description={[
                    "I was responsible for developing the frontend of DUIU's business platform, working from an existing UX design. I used AI tools as support throughout the development process, helping me build the different pages and implement the required functionality.",

                    "The platform allows businesses to manage their video competitions and access information about their campaigns. All information displayed on the platform, including user data, videos and campaign statistics, is fetched through API integrations.",

                    "My work involved turning the existing designs into a functional and responsive platform, making sure that the different features worked together and that information was presented clearly to the user."
                ]}
            />

            <ProjectSection
                title="Subscription form"
                video="/subForm.mp4"
                showReadMore
                description={[
                    "I was given the task of developing a subscription form for DUIU, with specific input fields and requirements. I built the frontend and worked with the backend developer to ensure the submitted information could be passed through the backend and eventually sent to SendGrid.",

                    "During testing, I noticed that one of the input fields, where users could enter their social media profiles, was too restrictive. It only accepted links starting with HTTPS. If a user entered a username or a link without HTTPS, an error message appeared suggesting that something had gone wrong with the backend, rather than explaining what was missing. This made it difficult for users to understand how to correct their input.",

                    "I raised this issue and discussed possible solutions with the backend developer. However, I ultimately decided to remove this restriction after checking the approach with the manager. Since the platform was still in an early stage, I felt it was more important to make the form flexible and easy to use than to enforce a specific link format.",

                    "I also saw an opportunity to improve the social media input further. Instead of having one general field, I introduced four separate inputs with icons for Instagram, TikTok, Snapchat and Kwai, allowing users to clearly specify which platforms their usernames belonged to.",

                    "To avoid adding more fields to SendGrid and requiring changes to the backend, I came up with an alternative solution. I developed a function that combines all entered usernames into a single field while labelling each platform separately. For example: Instagram: username | TikTok: username. This allowed us to improve the user experience without making unnecessary changes to the existing backend structure.",

                    "These improvements taught me the importance of looking beyond the technical requirements and considering the user's perspective. I learned to identify potential usability issues, take initiative and find solutions that improve the overall experience while keeping the technical implementation in mind."
                ]}
            />
        </>
    );
};

export default DUIUContent;
