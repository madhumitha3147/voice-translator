# 🌐 Voice Translator App

A full-stack web application that allows users to record speech, translate it into a selected language, and play back the translated audio.

- 🎤 Built with **React** (frontend)
- 🐍 Powered by **Flask** (backend)
- 🌍 Supports multiple languages
- 🔊 Provides both text and audio translations

---

## 🚀 Getting Started

### ⚙️ Prerequisites

Make sure you have the following installed on your system:

- ✅ Python 3.8 or higher
- ✅ Node.js and npm
- ✅ Git (optional, to clone the repo)

---

## 🔧 Backend Setup (Flask + Python)

1. Navigate to the backend directory:

   cd backend
   python -m venv venv
.\venv\Scripts\activate     # For Windows

2.Install backend dependencies:

   pip install flask flask-cors sounddevice gtts googletrans==4.0.0-rc12.

🌐 Frontend Setup (React)
1.Open a new terminal and go to the frontend directory:
  
  cd frontend
  npm install
  npm start


❓ Troubleshooting

  🔊 Microphone not working? Make sure browser mic permissions are enabled.
  ❗ Backend error 500? Check if all required Python packages are installed.
  🧠 Speech not recognized? Try speaking slowly and clearly.


