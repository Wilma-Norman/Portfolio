
import { useState } from "react";
import styles from "./Popup.module.css";

const ProjectPopup = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                className={styles.openButton}
                onClick={() => setIsOpen(true)}
            >
                Read more
            </button>

            {isOpen && (
                <div
                    className={styles.overlay}
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className={styles.modal}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            className={styles.closeButton}
                            onClick={() => setIsOpen(false)}
                            aria-label="Close popup"
                        >
                            &times;
                        </button>

                        <div className={styles.modalContent}>
    {children}
</div>


                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectPopup;