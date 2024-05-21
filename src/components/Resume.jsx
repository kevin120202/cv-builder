import React from "react";
import "../index.css"

function Resume(props) {
    // console.log(props.personalDetails);
    return (
        <div className="resume">
            <section className="resume-personal-details">
                <h1>{props.personalDetails.fullName}</h1>
                <div className="resume-personal-details-sub">
                    <p>{props.personalDetails.email}</p>
                    <p>{props.personalDetails.number}</p>
                    <p>{props.personalDetails.address}</p>
                </div>
            </section>
        </div>
    )
}

export default Resume