import React, { useState } from "react";
import '../index.css'
import PersonalDetailsForm from "./PersonalDetailsForm";

function PersonalDetails(props) {
    // console.log(props.formData);
    const [isShown, setIsShown] = useState(true)

    const toggleShown = () => {
        setIsShown(prevShown => !prevShown)
    }

    return (
        <div className="personal-details-container">
            <button
                onClick={toggleShown}
                className="isShown-btn">{isShown ? "Hide" : "Show"} Personal Details
            </button>
            {
                isShown &&
                <form>
                    <PersonalDetailsForm formData={props.formData} onChange={props.onChange} />
                </form>
            }
        </div>
    )
}

export default PersonalDetails