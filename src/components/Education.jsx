import React, { useState } from "react";
import '../index.css'


function Education(props) {
    // console.log(props);
    const [isEditMode, setIsEditMode] = useState(false);

    const [formData, setFormData] = useState({
        schoolName: "",
        degree: "",
        endDate: "",
        location: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditMode) {
            props.onEdit(formData.id, formData);
            setIsEditMode(false);
        } else {
            props.onSubmit(formData);
        }
        resetForm();
    }

    const resetForm = () => {
        setFormData({
            schoolName: "",
            degree: "",
            endDate: "",
            location: "",
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>{isEditMode ? 'Edit Education' : 'Add Education'}</h2>
                <label htmlFor="school-name">School</label>
                <input
                    type="text"
                    placeholder="Enter school name"
                    onChange={handleChange}
                    value={formData.schoolName}
                    name="schoolName"
                    id="school-name"
                />
                <label htmlFor="degree">Degree</label>
                <input
                    type="text"
                    placeholder="Enter degree"
                    onChange={handleChange}
                    value={formData.degree}
                    name="degree"
                    id="degree"
                />
                <label htmlFor="end-date">End date</label>
                <input
                    type="text"
                    placeholder="Enter end date"
                    onChange={handleChange}
                    value={formData.endDate}
                    name="endDate"
                    id="endDate"
                />
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    placeholder="Enter location"
                    onChange={handleChange}
                    value={formData.location}
                    name="location"
                    id="location"
                />
                <button type="submit">{isEditMode ? 'Update' : 'Add'}</button>
            </form>
        </div>
    )
}

export default Education