from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend communication

# Simulated data processing (later replace with LLM & job matching logic)
def generate_skill_roadmap(user_skills):
    return {
        "missing_skills": ["Machine Learning", "Data Analysis"],
        "roadmap": {
            "Machine Learning": ["Learn Python Basics", "Understand ML Algorithms", "Work on ML Projects"],
            "Data Analysis": ["Learn Pandas", "Explore Data Visualization", "Build Data Reports"]
        }
    }

@app.route("/analyze", methods=["POST"])
def analyze_user():
    data = request.json
    user_skills = data.get("skills", [])
    job_role = data.get("job_role", "Software Engineer")
    
    # Placeholder AI logic (Replace this with LLM & job API calls)
    roadmap = generate_skill_roadmap(user_skills)
    job_suggestions = [
        {"title": "Software Engineer Intern", "company": "Google"},
        {"title": "Data Analyst Intern", "company": "Amazon"}
    ]
    
    return jsonify({
        "roadmap": roadmap,
        "jobs": job_suggestions
    })

if __name__ == "__main__":
    app.run(debug=True)
# from flask import Flask, request, jsonify
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)  # Allow frontend to call backend from different origin

# import openai
# openai.api_key = "your-api-key-here"

# @app.route("/analyze", methods=["POST"])
# def analyze_user():
#     data = request.get_json()
#     prompt = f"""
#     The user has the following skills: {', '.join(data['skills'])}.
#     They are interested in the job role: {data['job_role']}.
#     Provide:
#     1. Missing skills
#     2. A 3-step roadmap for each missing skill
#     3. 2 job suggestions that match their current and needed skills
#     """

#     response = openai.ChatCompletion.create(
#         model="gpt-3.5-turbo",  # Or use gpt-4 if you have access
#         messages=[{"role": "user", "content": prompt}]
#     )

#     analysis = response["choices"][0]["message"]["content"]
#     return jsonify({"llm_response": analysis})


# if __name__ == "__main__":
#     app.run(debug=True)



