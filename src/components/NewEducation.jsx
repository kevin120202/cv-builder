import React, { useState } from "react";
import Schools from "./Schools";


function NewEducation(props) {
    const [isAdd, setIsAdd] = useState(false)

    const toggleisAdd = () => {
        setIsAdd(prevIsAdd => !prevIsAdd)
    }

    const schools = props.formData.map(school => {
        return <Schools schoolName={school.schoolName} key={school.id} />
    })

    return (
        <div>
            <button className="add-education-btn" onClick={toggleisAdd}>{isAdd ? "Close" : "Add"} Education</button>
            {isAdd &&
                <form>
                    <label htmlFor="school-name">School</label>
                    <input
                        type="text"
                        placeholder="Enter school name"
                        // onChange={handleChange}
                        // value={formData.schoolName}
                        name="schoolName"
                        id="school-name"
                    />
                    <label htmlFor="degree">Degree</label>
                    <input
                        type="text"
                        placeholder="Enter degree"
                        // onChange={handleChange}
                        // value={formData.degree}
                        name="degree"
                        id="degree"
                    />
                    <label htmlFor="end-date">End date</label>
                    <input
                        type="text"
                        placeholder="Enter end date"
                        // onChange={handleChange}
                        // value={formData.endDate}
                        name="endDate"
                        id="endDate"
                    />
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        placeholder="Enter location"
                        // onChange={handleChange}
                        // value={formData.location}
                        name="location"
                        id="location"
                    />
                    <button className="save-btn">Save</button>
                </form>
            }
            {schools}
        </div>
    )
}

export default NewEducation