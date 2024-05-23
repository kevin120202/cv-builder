import { useState } from 'react'
import './index.css'
import PersonalDetails from './components/PersonalDetails'
import Education from "./components/Education"
import Experience from './components/Experience'
import Resume from './components/Resume'
import PersonalDetailsResume from "./components/PersonalDetailsResume"
import EducationResume from './components/EducationResume'
import { v4 as uuidv4 } from 'uuid'

function App() {
    const [formPersonalDetails, setFormPersonalDetails] = useState({
        fullName: "Kevin Dela Paz",
        email: "kevin@gmail.com",
        number: "847-897-8186",
        address: "309 Panama Avenue",
    })
    const [formEducationDetails, setFormEducationDetails] = useState([{
        schoolName: "Northern Illinois University",
        degree: "Bachelors of Science in Computer Science",
        endDate: "May 2026",
        location: "Dekalb, IL",
        id: uuidv4(),
    },
    ])
    const [formExperienceDetails, setFormExperienceDetails] = useState([{
        companyName: "Google",
        title: "Software Engineer",
        startDate: "06/2024",
        endDate: "Present",
        location: "Chicago, IL",
        bulletPointOne: "code",
        bulletPointTwo: "code",
        bulletPointThree: "code",
        id: uuidv4()
    }, {
        companyName: "Google",
        title: "Software Engineer",
        startDate: "06/2024",
        endDate: "Present",
        location: "Chicago, IL",
        bulletPointOne: "code",
        bulletPointTwo: "code",
        bulletPointThree: "code",
        id: uuidv4()
    }])

    const handlePersonalDetailsChange = (e) => {
        const { name, value } = e.target
        setFormPersonalDetails(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const handleAddEducation = (newSchool) => {
        setFormEducationDetails(prev => {
            return [...prev, newSchool]
        })
    }

    const handleDeleteEducation = (id) => {
        setFormEducationDetails(formEducationDetails.filter(school => school.id !== id))
    }

    const handleEditEducation = (id, updatedSchool) => {
        setFormEducationDetails(prev =>
            prev.map(school => (school.id === id ? updatedSchool : school))
        );
    }

    const handleAddExperience = (newJob) => {
        setFormExperienceDetails(prev => {
            return [...prev, newJob]
        })
    }

    console.log(formExperienceDetails);

    return (
        <main>
            <div className='info'>
                <PersonalDetails formData={formPersonalDetails} onChange={handlePersonalDetailsChange} />
                <Education formData={formEducationDetails} onAddEducation={handleAddEducation} onDelete={handleDeleteEducation} onEditFormEducation={handleEditEducation} />
                <Experience formData={formExperienceDetails} onAddExperience={handleAddExperience} />
            </div>
            <div className='resume'>
                <Resume formDataPersonalDetails={formPersonalDetails} formDataEducationDetails={formEducationDetails} formExperienceDetails={formExperienceDetails} />
            </div>
        </main>
    )
}





export default App
