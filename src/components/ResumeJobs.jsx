import React from "react";

function ResumeJobs(props) {
    // console.log(props.job.companyName);
    return (
        <div className="resume-job-container">
            <div className="company-name-and-dates">
                <p>{props.job.companyName}</p>
                <p>{props.job.startDate} - {props.job.endDate}</p>
            </div>
            <p>{props.job.title}</p>
            <ul>
                <li>
                    {props.job.bulletPointOne}
                </li>
                <li>
                    {props.job.bulletPointTwo}
                </li>
                <li>
                    {props.job.bulletPointThree}
                </li>
            </ul>
        </div>
    )
}

export default ResumeJobs