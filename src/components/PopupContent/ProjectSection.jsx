
import { useState } from "react";
import styles from "../ProjectPopup/Popup.module.css";

const ProjectSection = ({ title, video, link, linkText = "Visit Code On GitHub", showReadMore = false, description = [] }) => {
    const [showMore, setShowMore] = useState(false);

    return (
        <>
            {title && (
                <p className={styles.firstCase}>{title}</p>
            )}

            {video && (
                <video
                    className={styles.modalVideo}
                    controls
                    playsInline
                >
                    <source src={video} type="video/mp4" />
                </video>
            )}

            {description.length > 0 && (
                <div className={styles.description}>

                    {(showReadMore && !showMore
                        ? description.slice(0, 1)
                        : description
                    ).map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}

                    {showReadMore && description.length > 1 && (
                        <button
                            className={styles.showMoreButton}
                            onClick={() => setShowMore(!showMore)}
                        >
                            <span>
                                {showMore ? "Show less" : "Read more"}
                            </span>
                        </button>
                    )}

                </div>
            )}
             {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                >
                    {linkText}
                </a>
            )}
        </>
    );
};

export default ProjectSection;
