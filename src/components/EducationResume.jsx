import React from "react";

function EducationResume(props) {
    // console.log(props.education);

    return (
        <section className="education-section">
            <div className="education">
                <div>
                    <p>{props.education.schoolName}</p>
                    <p>{props.education.location}</p>
                </div>
                <div>
                    <p>{props.education.degree}</p>
                    <p>{props.education.endDate}</p>
                </div>
            </div>
            <button onClick={() => props.onEdit(props.education.id)}>Edit</button>
            <button onClick={() => props.onDelete(props.education.id)}>Delete</button>
        </section>
    )
}

export default EducationResume