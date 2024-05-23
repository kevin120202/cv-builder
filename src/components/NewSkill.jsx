// import React, { useState } from "react";
// import { v4 as uuidv4 } from 'uuid'
// import Skill from "./Skill";


// function NewSkill(props) {
//     const [skill, setSkill] = useState({
//         skill: "",
//         id: "",
//     })

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         if (hasEmptyValues(skill)) {
//             props.onAddSkill(skill)
//             setSkill({
//                 skill: "",
//                 id: ""
//             })
//         }
//     }

//     const handleSkillChange = (e) => {
//         const { name, value } = e.target
//         setSkill({
//             [name]: value,
//             id: uuidv4()
//         })
//     }

//     const hasEmptyValues = (obj) => {
//         return Object.values(obj).every(val => val.trim() !== "")
//     }

//     const skillComponents = props.formData.map(skill => {
//         return <Skill skill={skill.skill} key={skill.id} id={skill.id} />
//     })

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="skill">Skill</label>
//                 <input
//                     type="text"
//                     placeholder="Enter a skill"
//                     onChange={handleSkillChange}
//                     value={skill.skill}
//                     name="skill"
//                     id="skill"
//                 />
//                 <button>Save</button>
//             </form>
//             {skillComponents}
//         </div>

//     )
// }

// export default NewSkill