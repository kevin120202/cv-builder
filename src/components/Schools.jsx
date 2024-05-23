import React, { useState } from "react";

function Schools(props) {
    // console.log(props.onDelete);

    const hasEmptyValues = (obj) => {
        return Object.values(obj).every(val => val.trim() !== "")
    }

    return (
        <div className="schools-container">
            {hasEmptyValues(props.school) && (
                <div>
                    <span>{props.school.schoolName}</span>
                    <div>
                        <button onClick={() => props.onEdit(props.school.id)}>Edit</button>
                        <button onClick={() => props.onDelete(props.school.id)}>Remove</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Schools