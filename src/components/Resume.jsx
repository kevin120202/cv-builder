import React from "react";
import "../index.css"
import ResumeSchools from "./ResumeSchools";


function Resume(props) {
    // console.log(props.formDataEducationDetails);

    const resumeSchoolsComponents = props.formDataEducationDetails.map(school => {
        return <ResumeSchools school={school} key={school.id} />
    })

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
                {resumeSchoolsComponents}
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