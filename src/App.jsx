import { useState } from 'react'
import './index.css'
import PersonalDetails from './components/PersonalDetails'
import Education from "./components/Education"
import PersonalDetailsResume from "./components/PersonalDetailsResume"
import { v4 as uuidv4 } from 'uuid'

function App() {
    const [formPersonalDetails, setFormPersonalDetails] = useState({
        fullName: "",
        email: "",
        number: "",
        address: "",
    })
    const [formEducation, setFormEducation] = useState([
        {
            schoolName: "",
            degree: "",
            startDate: "",
            endDate: "",
            location: "",
            id: uuidv4(),
        }
    ])

    function handlePersonalDetailsChange(e) {
        const { name, value } = e.target
        // console.log(name, value);
        setFormPersonalDetails(prevFormData => {
            return {
                ...prevFormData,
                [name]: value,
            }
        })
    }

    function handleEducationChange(e) {
        const { name, value } = e.target
        setFormEducation(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function addEducation(e) {
        pass
    }

    return (
        <main>
            <div className="info">
                <PersonalDetails formData={formPersonalDetails} onChange={handlePersonalDetailsChange} />
                <div>
                    <Education formData={formEducation} onChange={handleEducationChange} />
                    <button onClick={addEducation}>Save</button>
                </div>

            </div>
            <div className='resume'>
                <PersonalDetailsResume personalDetails={formPersonalDetails} />
            </div>
        </main>
    )
}

export default App
