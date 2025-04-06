import React, { useState } from "react";
import axios from "axios";

function App() {
  const [skills, setSkills] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const skillsArray = skills.split(",").map((s) => s.trim());

    try {
      const response = await axios.post("http://127.0.0.1:5000/analyze", {
        skills: skillsArray,
        job_role: jobRole
      });

      setResult(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Personalized Skilling & Career Guidance</h2>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter your skills (comma-separated)" 
          value={skills} 
          onChange={(e) => setSkills(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Job Role you are interested in" 
          value={jobRole} 
          onChange={(e) => setJobRole(e.target.value)} 
        />
        <button type="submit">Analyze</button>
      </form>

      {result && (
        <div>
          <h3>Skill Roadmap</h3>
          <ul>
            {result.roadmap.missing_skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <h3>Suggested Jobs</h3>
          <ul>
            {result.jobs.map((job, index) => (
              <li key={index}>{job.title} at {job.company}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
// document.getElementById("skillForm").addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const skills = document.getElementById("skills").value.split(",").map(s => s.trim());
//   const interests = document.getElementById("interests").value;
//   const jobRole = document.getElementById("jobRole").value;

//   const response = await fetch("http://127.0.0.1:5000/analyze", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       skills: skills,
//       interests: interests,
//       job_role: jobRole
//     })
//   });

//   const data = await response.json();
//   displayResult(data);
// });

// function displayResult(data) {
//   const resultDiv = document.getElementById("result");
//   resultDiv.innerHTML = `
//     <h3>🔧 Missing Skills:</h3>
//     <ul>${data.roadmap.missing_skills.map(skill => `<li>${skill}</li>`).join("")}</ul>

//     <h3>🗺️ Learning Roadmap:</h3>
//     ${Object.entries(data.roadmap.roadmap).map(([skill, steps]) => `
//       <h4>${skill}</h4>
//       <ul>${steps.map(step => `<li>${step}</li>`).join("")}</ul>
//     `).join("")}

//     <h3>💼 Job Recommendations:</h3>
//     <ul>${data.jobs.map(job => `<li>${job.title} at ${job.company}</li>`).join("")}</ul>
//   `;
// }
