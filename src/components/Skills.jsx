// import React, { useState } from "react";
// import NewSkill from "./NewSkill";

// function Skills(props) {
//     const [isShown, setIsShown] = useState(true);

//     const toggleShown = () => {
//         setIsShown(prevShown => !prevShown)
//     }

//     return (
//         <div className="skills-container">
//             <button
//                 onClick={toggleShown}
//                 className="isShown-btn">{isShown ? "Hide" : "Show"} Skills
//             </button>
//             {isShown && <NewSkill formData={props.formData} onAddSkill={props.onAddSkill} />}
//         </div>
//     )
// }

// export default Skills