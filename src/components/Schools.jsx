import React, { useState } from "react";

function Schools(props) {
    const [isUpdate, setIsUpdate] = useState(false)
    const [isRemove, setIsRemove] = useState(false)

    return (
        <div className="schools-container">
            <span>{props.schoolName}</span>
            <div>
                <button>Update</button>
                <button>Remove</button>
            </div>
        </div>
    )
}

export default Schools