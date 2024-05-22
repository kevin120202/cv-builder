import React from "react";
import "../index.css"

function Resume(props) {
    return (
        <div>
            <div className="resume-personal-details">
                <h1>{props.formDataPersonalDetails.fullName}</h1>
                <div className="resume-personal-details-sub">
                    <p>{props.formDataPersonalDetails.email}</p>
                    <p>{props.formDataPersonalDetails.number}</p>
                    <p>{props.formDataPersonalDetails.address}</p>
                </div>
            </div>
            <div className="resume-education">
                <h3>Education</h3>
                <hr />
            </div>
            <div className="resume-experience">
                <h3>Experience</h3>
                <hr />
            </div>
            <div className="resume-skills-interest">
                <h3>Skills & Interests</h3>
                <hr />
            </div>
        </div>
    )
}

export default Resume