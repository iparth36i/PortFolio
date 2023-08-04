// import React from 'react';

// const SkillItem = ({ name, level }) => (
//   <div className="skills__data">
//     <i className='bx bx-badge-check'></i>
//     <div>
//       <h3 className="skills__name">{name}</h3>
//       <span className="skills__level">{level}</span>
//     </div>
//   </div>
// );

// const Myskills = () => {
//   const frontendSkills1 = [
//     { name: "HTML5", level: "Advance" },
//     { name: "CSS", level: "Intermediate" },
//     { name: "JavaScript", level: "Advance" },
//   ];
//   const frontendSkills2 = [ 
//     { name: "Bootstrap", level: "Intermediate" },
//     { name: "NodeJS", level: "Basic" },
//     { name: "ReactJs", level: "Basic" },
//   ];

//   const dataAnalysisSkills1 = [
//     { name: "Python", level: "Intermediate" },
//     { name: "MySQL", level: "Advance" },
//     { name: "Tableau", level: "Intermediate" },
//   ];
//   const dataAnalysisSkills2 = [
//     { name: "Git", level: "Intermediate" },
//     { name: "Microsoft Excel", level: "Advance" },
//     { name: "PowerBI", level: "Basic" },
//   ];

//   return (
//     <>
//       <div className="skills__content">
//         <h3 className="skills__title">Web Developer</h3>
//         <div className="skills__box">
//           <div className="skills__group">
//             {frontendSkills1.map((skill, index) => (
//               <>
//               <SkillItem key={index} name={skill.name} level={skill.level} />
//               <SkillItem key={index} name={skill.name} level={skill.level} />
//               </>
//             ))}
//           </div>
//           {/* <div className="skills__group">
//             {frontendSkills2.map((skill, index) => (
//               <SkillItem key={index} name={skill.name} level={skill.level} />
//             ))}
//           </div>   */}
//         </div>
//       </div>

//       <div className="skills__content">
//         <h3 className="skills__title">Data Analysis and Tools</h3>
//         <div className="skills__box">
//           <div className="skills__group">
//             {dataAnalysisSkills1.map((skill, index) => (
//               <SkillItem key={index} name={skill.name} level={skill.level} />
//             ))}
//           </div>
//           <div className="skills__group">
//             {dataAnalysisSkills2.map((skill, index) => (
//               <SkillItem key={index} name={skill.name} level={skill.level} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Myskills;
