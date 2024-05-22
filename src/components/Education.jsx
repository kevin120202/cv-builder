import React from "react";
import '../index.css'

function Education(props) {
    // console.log(props);

    function handleEducationSubmit(e) {
        e.preventDefault()
        console.log(props.formData);
    }

    return (
        <div>
            <form onSubmit={handleEducationSubmit}>
                <h2>Education</h2>
                <label htmlFor="school-name">School</label>
                <input
                    type="text"
                    placeholder="Enter school name"
                    onChange={props.onChange}
                    value={props.formData.schoolName}
                    name="schoolName"
                    id="school-name"
                />
                <label htmlFor="degree">Degree</label>
                <input
                    type="text"
                    placeholder="Enter degree"
                    onChange={props.onChange}
                    value={props.formData.degree}
                    name="degree"
                    id="degree"
                />
                <div className="dates">
                    <label htmlFor="start-date">Start date</label>
                    <input
                        type="text"
                        placeholder="Enter start date"
                        onChange={props.onChange}
                        value={props.formData.startDate}
                        name="startDate"
                        id="StartDate"
                    />
                    <label htmlFor="end-date">End date</label>
                    <input
                        type="text"
                        placeholder="Enter end date"
                        onChange={props.onChange}
                        value={props.formData.endDate}
                        name="endDate"
                        id="endDate"
                    />
                </div>
                <div>
                    <button>Delete</button>
                    <button>Cancel</button>
                    <button>Save</button>
                </div>
            </form>
        </div>
    )
}

export default Education