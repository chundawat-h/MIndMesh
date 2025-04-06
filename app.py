from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    skills = data.get('skills', '')
    interests = data.get('interests', '')
    job_role = data.get('job_role', '')

    # Dummy LLM-like analysis
    response = {
        'missing_skills': 'Data Structures, REST APIs, Git',
        'roadmap': (
            "1. Learn basics of Data Structures and Algorithms\n"
            "2. Build RESTful APIs using Flask or Django\n"
            "3. Understand Git and GitHub workflow\n"
            "4. Create 2-3 mini-projects using these skills\n"
            "5. Apply to internships via job platforms"
        ),
        'jobs': 'SDE Intern at Google, Backend Dev at Infosys, Software Intern at Groww'
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)

  