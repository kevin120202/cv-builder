import { useState } from 'react'
import './index.css'
import PersonalDetails from './components/PersonalDetails'
import Education from "./components/Education"
import PersonalDetailsResume from "./components/PersonalDetailsResume"
import EducationResume from './components/EducationResume'
import { v4 as uuidv4 } from 'uuid'

function App() {
    const [formPersonalDetails, setFormPersonalDetails] = useState({
        fullName: "",
        email: "",
        number: "",
        address: "",
    })
    const [formEducation, setFormEducation] = useState([])

    function handlePersonalDetailsChange(e) {
        const { name, value } = e.target
        setFormPersonalDetails(prevFormData => {
            return {
                ...prevFormData,
                [name]: value,
            }
        })
    }

    function addEducation(newEducation) {
        setFormEducation(prevFormEducation => [
            ...prevFormEducation,
            {
                ...newEducation,
                id: uuidv4(),
            }
        ])
    }

    function editEducation(id, updatedEducation) {
        setFormEducation(prevFormEducation =>
            prevFormEducation.map(education =>
                education.id === id ? { ...education, ...updatedEducation } : education
            )
        );
    }

    function deleteEducation(id) {
        setFormEducation(prevFormEducation =>
            prevFormEducation.filter(education => education.id !== id)
        );
    }

    const educationResumeComponents = formEducation.map(school => {
        return <EducationResume
            education={school}
            key={school.id}
            onEdit={editEducation}
            onDelete={deleteEducation}
        />
    })

    return (
        <main>
            <div className="info">
                <PersonalDetails formData={formPersonalDetails} onChange={handlePersonalDetailsChange} />
                <Education formData={formEducation} onSubmit={addEducation} onEdit={editEducation} onDelete={deleteEducation} />
            </div>
            <div className='resume'>
                <PersonalDetailsResume personalDetails={formPersonalDetails} />
                <div>
                    <h3>EDUCATION</h3>
                    <hr />
                </div>
                {educationResumeComponents}
                <div>
                    <h3>EXPERIENCE</h3>
                    <hr />
                </div>
            </div>
        </main>
    )
}

export default App
