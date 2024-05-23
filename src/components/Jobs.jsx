import React from "react";

function Jobs(props) {
    // console.log(props.job);

    const hasEmptyValues = (obj) => {
        return Object.values(obj).every(val => val.trim() !== "")
    }

    return (
        <div className="jobs-container">
            {hasEmptyValues(props.job) && (
                <div>
                    <span>{props.job.companyName}</span>
                    <div>
                        <button onClick={() => props.onEdit(props.job.id)}>Edit</button>
                        <button onClick={() => props.onDelete(props.job.id)}>Remove</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Jobs