import { useState } from 'react'
import './index.css'
import PersonalDetails from './components/PersonalDetails'
import Resume from "./components/Resume"

function App() {
    const [formPersonalDetails, setFormPersonalDetails] = useState({
        fullName: "",
        email: "",
        number: "",
        address: "",
    })

    function handleChange(e) {
        const { name, value } = e.target
        // console.log(name, value);
        setFormPersonalDetails(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    return (
        <main>
            <div className="info">
                <PersonalDetails formData={formPersonalDetails} onChange={handleChange} />
            </div>
            <Resume personalDetails={formPersonalDetails} />
        </main>
    )
}

export default App
