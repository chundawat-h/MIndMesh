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
