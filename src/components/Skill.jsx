// import React from "react";

// function Skill(props) {
//     const hasEmptyValues = (obj) => {
//         return Object.values(obj).every(val => val.trim() !== "")
//     }

//     console.log(props);

//     return (
//         <div className="jobs-container">
//             {hasEmptyValues(props.skill) && (
//                 <div>
//                     <span>{props.skill}</span>
//                     <div>
//                         <button onClick={() => props.onEdit(props.job.id)}>Edit</button>
//                         <button onClick={() => props.onDelete(props.job.id)}>Remove</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     )
// }

// export default Skill