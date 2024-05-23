import React, { useState } from "react";
import '../index.css'
import NewEducation from "./NewEducation";


function Education(props) {
    // console.log(props);
    const [isShown, setIsShown] = useState(true);

    const toggleShown = () => {
        setIsShown(prevShown => !prevShown)
    }

    return (
        <div className="education-container">
            <button
                onClick={toggleShown}
                className="isShown-btn">{isShown ? "Hide" : "Show"} Education
            </button>
            {isShown && <NewEducation formData={props.formData} onAddEducation={props.onAddEducation} onDelete={props.onDelete} onEditFormEducation={props.onEditFormEducation} />}
        </div>
    )
}

export default Education