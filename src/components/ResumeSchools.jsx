import React from "react";

function ResumeSchools(props) {

    return (
        <div>
            <div className="resume-schools">
                <p>{props.school.schoolName}</p>
                <p>{props.school.location}</p>
            </div>
            <div className="resume-schools">
                <p>{props.school.degree}</p>
                <p>{props.school.endDate}</p>
            </div>
        </div>
    )
}

export default ResumeSchools