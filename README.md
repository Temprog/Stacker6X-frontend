# 🛡️ Frontend for Stacker6X API

This is the **frontend interface** for the **Stacker6X Security Model API: AI-Based Vulnerability & Attack Detector.**

It serves as a user-friendly interface for the machine learning system that detects SQL injection (SQLi) and Cross-Site Scripting (XSS) attacks.
The frontend provides a lightweight web UI where users can enter text, code, or payloads, send them to the backend API (hosted on AWS EC2) and instantly view the model’s classification results.


## 🚀 Features
- Clean, minimal HTML/CSS/JS interface
- Input form for text payloads
- Calls the backend’s /predict API endpoint
- Displays classification result (SQLi (malicious), XSS (malicious), or Benign (normal))
- Handles errors gracefully (e.g., missing input, backend unavailable, large payloads)


# 🗂️ Project Structure

frontend/
│
├── index.html        # Main page
├── static/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── app.js    # Fetches from backend API
└── README.md         # This file


# ⚡ Setup & Usage

1. Clone this repo:

```bash

git clone https://github.com/yourusername/stacker6x-frontend.git
cd stacker6x-frontend
```

2. Open index.html directly in a browser or serve it with a simple HTTP server:
3. 
```bash
python -m http.server 8080
```
Then go to: http://localhost:8080

3. Ensure the backend API is running (by default: http://127.0.0.1:5000).
4. Enter a test string and press Submit — the result will be displayed below the form.


## 🔗 API Connection

The frontend communicates with the backend API to classify inputs.

- **Endpoint:** `POST /predict`  
- **Content-Type:** `application/json`  

**Example request:**
```json
{ "text": "SELECT * FROM users WHERE id = 1 OR 1=1" }
```

**Example response:**

```json
{"prediction": "SQLi (malicious)"}
```
-  The configuration of the backend URL is in app.js. If the backend is deployed to a cloud service (e.g., Render, Heroku, AWS), it should be updated the right backend URL.


## 🎨 Web UI Screenshots / Demo

### Web UI
![Stacker6X API Frontend Landing](https://github.com/Temprog/Stacker6X-App/blob/main/images/demo1.png)
*Landing page and input form*

![Detection/prediction of normal/benign text](https://github.com/Temprog/Stacker6X-App/blob/main/images/demo2.png)
*Example prediction for benign input*

![Detection/prediction of SQLi malicious code](https://github.com/Temprog/Stacker6X-App/blob/main/images/demo3.png)
*Detection of SQL injection payloads*

![Detection/predicition of XSS malicious payloads](https://github.com/Temprog/Stacker6X-App/blob/main/images/demo4.png)
*Detection of XSS attack payloads*


## 🛠️ Tech Stack

- HTML5, CSS3, JavaScript
- Simple fetch API to communicate with Flask backend
- Deployable on GitHub Pages, Netlify, or Vercel


## 📂 Related Repositories

- 🧠 [Stacker6X Model (ML Training & Core Logic)](https://github.com/Temprog/Stacker6X-Model)  
  Core machine learning repository containing training code, preprocessing, model artifacts, evaluation, configuration, notebooks, utilities and deployment simulation.   
- 🛡️ [Stacker6X API - Backend (Flask REST API)](https://github.com/Temprog/Stacker6X-API)  
  Flask REST API for serving predictions from the trained model, with an added regex-based guardrail to reduce false positives.  


✨ Portfolio Note: This project shows how to integrate the Stacker6X machine learning API with a user-friendly frontend, demonstrating full-stack ML deployment skills.
