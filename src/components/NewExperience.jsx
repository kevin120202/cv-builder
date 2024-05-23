import React, { useState } from "react";
import Jobs from "./Jobs";
import { v4 as uuidv4 } from 'uuid'

function NewExperience(props) {
    const [isAdd, setIsAdd] = useState(true)
    const [formExperienceDetails, setExperienceDetails] = useState({
        companyName: "",
        title: "",
        startDate: "",
        endDate: "",
        location: "",
        bulletPointOne: "",
        bulletPointTwo: "",
        bulletPointThree: "",
        id: uuidv4()
    })

    const toggleisAdd = () => {
        setIsAdd(prevIsAdd => !prevIsAdd)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (hasEmptyValues(formExperienceDetails)) {
            props.onAddExperience(formExperienceDetails)
            setExperienceDetails({
                companyName: "",
                title: "",
                startDate: "",
                endDate: "",
                location: "",
                bulletPointOne: "",
                bulletPointTwo: "",
                bulletPointThree: "",
                id: uuidv4()
            })
        }
    }

    const handleExperienceChange = (e) => {
        const { name, value } = e.target
        setExperienceDetails(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const jobs = props.formData.map(job => {
        return <Jobs job={job} key={job.id} />
    })

    const hasEmptyValues = (obj) => {
        return Object.values(obj).every(val => val.trim() !== "")
    }

    return (
        <div className="education-container">
            <button className="add-btn" onClick={toggleisAdd}>{isAdd ? "Close" : "Add"} Experience</button>
            {isAdd &&
                <form onSubmit={handleSubmit}>
                    <label htmlFor="company-name">Company name</label>
                    <input
                        type="text"
                        placeholder="Enter company name"
                        onChange={handleExperienceChange}
                        value={formExperienceDetails.schoolName}
                        name="companyName"
                        id="company-name"
                    />
                    <label htmlFor="degree">Title</label>
                    <input
                        type="text"
                        placeholder="Enter title"
                        onChange={handleExperienceChange}
                        value={formExperienceDetails.degree}
                        name="title"
                        id="title"
                    />
                    <div>
                        <label htmlFor="start-date">Start date</label>
                        <input
                            type="text"
                            placeholder="Enter start date"
                            onChange={handleExperienceChange}
                            value={formExperienceDetails.startDate}
                            name="startDate"
                            id="startDate"
                        />
                        <label htmlFor="end-date">End date</label>
                        <input
                            type="text"
                            placeholder="Enter end date"
                            onChange={handleExperienceChange}
                            value={formExperienceDetails.endDate}
                            name="endDate"
                            id="end-date"
                        />
                    </div>
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        placeholder="Enter location"
                        onChange={handleExperienceChange}
                        value={formExperienceDetails.location}
                        name="location"
                        id="location"
                    />
                    <label htmlFor="bullet-point-one">Bullet point one</label>
                    <input
                        type="text"
                        placeholder="Enter first point"
                        onChange={handleExperienceChange}
                        value={formExperienceDetails.bulletPointOne}
                        name="bulletPointOne"
                        id="bullet-point-one"
                    />
                    <label htmlFor="bullet-point-two">Bullet point two</label>
                    <input
                        type="text"
                        placeholder="Enter second point"
                        onChange={handleExperienceChange}
                        value={formExperienceDetails.bulletPointTwo}
                        name="bulletPointTwo"
                        id="bullet-point-two"
                    />
                    <label htmlFor="bullet-point-three">Bullet point three</label>
                    <input
                        type="text"
                        placeholder="Enter third point"
                        onChange={handleExperienceChange}
                        value={formExperienceDetails.bulletPointThree}
                        name="bulletPointThree"
                        id="bullet-point-three"
                    />
                    <button className="save-btn">Save</button>
                </form>
            }
            {jobs}
        </div>
    )
}

export default NewExperience