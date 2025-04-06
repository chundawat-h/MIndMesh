// document.getElementById('userForm').addEventListener('submit', function (e) {
//   e.preventDefault();

//   const formData = new FormData(this);
//   const data = {
//     skills: formData.get('skills'),
//     interests: formData.get('interests'),
//     job_role: formData.get('job_role')
//   };

//   // Step 1: Open dashboard tab immediately to avoid browser block
//   const dashboardTab = window.open('/dashboard', '_blank');

//   // Step 2: Wait a bit and then post message
//   setTimeout(() => {
//     fetch('/analyze', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//       .then(res => res.json())
//       .then(result => {
//         dashboardTab.postMessage(result, '*');
//       })
//       .catch(err => {
//         dashboardTab.postMessage({ error: "Error occurred: " + err }, '*');
//       });
//   }, 500);
// });



document.getElementById('userForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = {
    skills: formData.get('skills'),
    interests: formData.get('interests'),
    job_role: formData.get('job_role')
  };

  const dashboardTab = window.open('/dashboard', '_blank');

  setTimeout(() => {
    fetch('/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
      dashboardTab.postMessage(result, '*');
    })
    .catch(err => {
      dashboardTab.postMessage({ error: "Something went wrong!" }, '*');
    });
  }, 500);
});



//   // Open new tab early to avoid browser blocking
//   const dashboardWindow = window.open('/dashboard', '_blank');

//   fetch('/analyze', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//     .then(res => res.json())
//     .then(result => {
//       const content = `
//         <div class="container">
//           <h2>🌟 Personalized Skill Dashboard</h2>
//           <p><strong>🧠 Your Skills:</strong> ${data.skills}</p>
//           <p><strong>🎯 Target Role:</strong> ${data.job_role}</p>
//           <p><strong>💡 Skills You Need to Learn:</strong> ${result.missing_skills}</p>
//           <p><strong>🗺️ Roadmap:</strong><br>${result.roadmap.replace(/\n/g, '<br>')}</p>
//           <p><strong>💼 Job Suggestions:</strong> ${result.jobs}</p>
//         </div>
//         <style>
//           body {
//             font-family: 'Segoe UI', sans-serif;
//             background-color: #f0f4f8;
//             padding: 30px;
//             color: #333;
//           }
//           .container {
//             background: #fff;
//             padding: 30px;
//             border-radius: 14px;
//             box-shadow: 0 8px 20px rgba(0,0,0,0.1);
//             max-width: 800px;
//             margin: auto;
//             text-align: left;
//           }
//           h2 {
//             color: #0077cc;
//             margin-bottom: 20px;
//           }
//           p {
//             margin-bottom: 15px;
//             font-size: 16px;
//             line-height: 1.6;
//           }
//         </style>
//       `;
//       dashboardWindow.document.body.innerHTML = content;
//     })
//     .catch(error => {
//       dashboardWindow.document.body.innerHTML = `<h2>❌ Something went wrong!</h2><p>${error}</p>`;
//     });
// });
