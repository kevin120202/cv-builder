import React, { useState } from "react";
import NewExperience from "./NewExperience";

function Experience(props) {
    const [isShown, setIsShown] = useState(true);

    const toggleShown = () => {
        setIsShown(prevShown => !prevShown)
    }

    return (
        <div className="Experience-container">
            <button
                onClick={toggleShown}
                className="isShown-btn">{isShown ? "Hide" : "Show"} Experience
            </button>
            {isShown && <NewExperience formData={props.formData} onAddExperience={props.onAddExperience} />}
        </div>
    )
}

export default Experience