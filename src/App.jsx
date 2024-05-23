import { useState } from 'react'
import './index.css'
import PersonalDetails from './components/PersonalDetails'
import Education from "./components/Education"
import Experience from './components/Experience'
import Resume from './components/Resume'
// import Skills from './components/Skills'
import { v4 as uuidv4 } from 'uuid'

function App() {
    const [formPersonalDetails, setFormPersonalDetails] = useState({
        fullName: "Kevin Dela Paz",
        email: "kevin@gmail.com",
        number: "111-111-1111",
        address: "Chicago, IL",
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
    }
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
        companyName: "Amazon",
        title: "Software Engineer Intern",
        startDate: "06/2023",
        endDate: "09/2023",
        location: "Chicago, IL",
        bulletPointOne: "code",
        bulletPointTwo: "code",
        bulletPointThree: "code",
        id: uuidv4()
    }, {
        companyName: "DoorDash",
        title: "Software Engineer Intern",
        startDate: "06/2022",
        endDate: "09/2023",
        location: "Chicago, IL",
        bulletPointOne: "code",
        bulletPointTwo: "code",
        bulletPointThree: "code",
        id: uuidv4()
    }, {
        companyName: "Walmart",
        title: "Software Engineer Intern",
        startDate: "06/2021",
        endDate: "09/2022",
        location: "Remote",
        bulletPointOne: "code",
        bulletPointTwo: "code",
        bulletPointThree: "code",
        id: uuidv4()
    }
    ])
    // const [formSkillsDetails, setFormSkillsDetails] = useState([{
    //     skill: "Javascript",
    //     id: uuidv4()
    // }, {
    //     skill: "Python",
    //     id: uuidv4()
    // }
    // ])
    // const [formInterestsDetails, setFormInterestsDetails] = useState([{
    //     interest: "Basketball",
    //     id: uuidv4(),
    // }, {
    //     interest: "Bowling",
    //     id: uuidv4()
    // }])

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

    const handleDeleteJob = (id) => {
        setFormExperienceDetails(formExperienceDetails.filter(job => job.id !== id))
    }

    const handleEditJob = (id, updatedJob) => {
        setFormExperienceDetails(prev =>
            prev.map(job => (job.id === id ? updatedJob : job))
        )
    }

    // const handleAddSkill = (newSkill) => {
    //     setFormSkillsDetails(prev => {
    //         return [...prev, newSkill]
    //     })
    // }

    return (
        <main>
            <div className='info'>
                <PersonalDetails formData={formPersonalDetails} onChange={handlePersonalDetailsChange} />
                <Education formData={formEducationDetails} onAddEducation={handleAddEducation} onDelete={handleDeleteEducation} onEditFormEducation={handleEditEducation} />
                <Experience formData={formExperienceDetails} onAddExperience={handleAddExperience} onDelete={handleDeleteJob} onEditFormJob={handleEditJob} />
                {/* <Skills formData={formSkillsDetails} onAddSkill={handleAddSkill} /> */}
            </div>
            <div className='resume'>
                <Resume formDataPersonalDetails={formPersonalDetails} formDataEducationDetails={formEducationDetails} formExperienceDetails={formExperienceDetails} />
            </div>
        </main>
    )
}

export default App
