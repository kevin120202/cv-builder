import React from "react";

function PersonalDetailsResume(props) {
    return (
        <section className="resume-personal-details">
            <h1>{props.personalDetails.fullName}</h1>
            <div className="resume-personal-details-sub">
                <p>{props.personalDetails.email}</p>
                <p>{props.personalDetails.number}</p>
                <p>{props.personalDetails.address}</p>
            </div>
        </section>
    )
}

export default PersonalDetailsResume