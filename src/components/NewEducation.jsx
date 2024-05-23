import React, { useState } from "react";
import Schools from "./Schools";
import { v4 as uuidv4 } from 'uuid'


function NewEducation(props) {
    // console.log(props.onChange);
    const [isAdd, setIsAdd] = useState(true)
    const [formEducationDetails, setEducationDetails] = useState({
        schoolName: "",
        degree: "",
        endDate: "",
        location: "",
        id: uuidv4()
    })

    const toggleisAdd = () => {
        setIsAdd(prevIsAdd => !prevIsAdd)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (hasEmptyValues(formEducationDetails)) {
            props.onAddEducation(formEducationDetails)
            setEducationDetails({
                schoolName: "",
                degree: "",
                endDate: "",
                location: "",
                id: uuidv4()
            })
        }
    }

    const handleEducationChange = (e) => {
        const { name, value } = e.target
        setEducationDetails(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleEditEducation = (id) => {
        props.formData.map(school => {
            if (school.id === id) {
                setEducationDetails(school)
            }
        })
        props.onEditFormEducation(id, formEducationDetails)
    }

    const schools = props.formData.map(school => {
        return <Schools school={school} key={school.id} onDelete={props.onDelete} onEdit={handleEditEducation} />
    })

    const hasEmptyValues = (obj) => {
        return Object.values(obj).every(val => val.trim() !== "")
    }

    return (
        <div>
            <button className="add-btn" onClick={toggleisAdd}>{isAdd ? "Close" : "Add"} Education</button>
            {isAdd &&
                <form onSubmit={handleSubmit}>
                    <label htmlFor="school-name">School</label>
                    <input
                        type="text"
                        placeholder="Enter school name"
                        onChange={handleEducationChange}
                        value={formEducationDetails.schoolName}
                        name="schoolName"
                        id="school-name"
                    />
                    <label htmlFor="degree">Degree</label>
                    <input
                        type="text"
                        placeholder="Enter degree"
                        onChange={handleEducationChange}
                        value={formEducationDetails.degree}
                        name="degree"
                        id="degree"
                    />
                    <label htmlFor="end-date">End date</label>
                    <input
                        type="text"
                        placeholder="Enter end date"
                        onChange={handleEducationChange}
                        value={formEducationDetails.endDate}
                        name="endDate"
                        id="endDate"
                    />
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        placeholder="Enter location"
                        onChange={handleEducationChange}
                        value={formEducationDetails.location}
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