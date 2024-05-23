import React from "react";

function ResumeSchools(props) {
    // console.log(props.school);

    // const hasEmptyValues = (obj) => {
    //     return Object.values(obj).every(val => val.trim() !== "")
    // }


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