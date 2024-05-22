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
        fullName: "kevin",
        email: "kevin@gmail.com",
        number: "123",
        address: "123",
    })
    const [formEducationDetails, setFormEducationDetails] = useState([{
        schoolName: "niu",
        degree: "bachelors",
        endDate: "may 2026",
        location: "dekalb, il",
        id: uuidv4(),
    }, {
        schoolName: "niu",
        degree: "bachelors",
        endDate: "may 2026",
        location: "dekalb, il",
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
                <Resume formDataPersonalDetails={formPersonalDetails} />
            </div>
        </main>
    )
}

export default App
