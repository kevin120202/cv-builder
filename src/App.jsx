import { useState } from 'react'
import './index.css'
import PersonalDetails from './components/PersonalDetails'
import Education from "./components/Education"
import Resume from './components/Resume'
import PersonalDetailsResume from "./components/PersonalDetailsResume"
import EducationResume from './components/EducationResume'
import { v4 as uuidv4, v4 } from 'uuid'

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
    }, {
        schoolName: "Elgin Community College",
        degree: "Associates of Arts",
        endDate: "May 2024",
        location: "Elgin, IL",
        id: uuidv4(),
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

    return (
        <main>
            <div className='info'>
                <PersonalDetails formData={formPersonalDetails} onChange={handlePersonalDetailsChange} />
                <Education formData={formEducationDetails} />
            </div>
            <div className='resume'>
                <Resume formDataPersonalDetails={formPersonalDetails} formDataEducationDetails={formEducationDetails} />
            </div>
        </main>
    )
}

export default App
