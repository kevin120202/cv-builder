import React from "react";

function ResumeSchools(props) {
    console.log(props.school.schoolName);
    return (
        <div className="resume-schools-container">
            <div>
                <p>{props.school.schoolName}</p>
                <p>{props.school.degree}</p>
            </div>
            <div>
                <p>{props.school.location}</p>
                <p>{props.school.endDate}</p>
            </div>
        </div>
    )
}

export default ResumeSchools