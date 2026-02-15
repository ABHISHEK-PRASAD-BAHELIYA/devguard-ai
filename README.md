# 🛡 DevGuard AI

### AI-Powered Deployment Safety Controller

DevGuard AI is an MCP-powered deployment safety controller built using Archestra.

## It analyzes GitHub commits and open issues before approving deployments and provides structured risk recommendations.

## 🚀 Live Demo

🌐 **Deployed Application:**  
https://devguard-ai.onrender.com

🎥 **Demo Video:**
https://drive.google.com/file/d/1RkL-AF9ZxJ4i7g28NoKrLll5yc4cqHsa/view?usp=drive_link

---

## 📸 Demo Screenshots

![Demo](https://drive.google.com/file/d/1bs6u0SiYU9XQujvl4oaF7lNOEoGkGnaf/view?usp=sharing)

![Demo](https://drive.google.com/file/d/1hY6qn1UorwUCNR1OBrzWoMEPxuly5j10/view?usp=sharing)

[![Watch Demo](https://drive.google.com/file/d/1hxpTbFddt7IdSK11xUiXLIQmUnBBsGY8/view?usp=sharing)](https://drive.google.com/file/d/1RkL-AF9ZxJ4i7g28NoKrLll5yc4cqHsa/view?usp=drive_link)

### 🖥 Dashboard UI

![Dashboard Screenshot](https://drive.google.com/file/d/1hxpTbFddt7IdSK11xUiXLIQmUnBBsGY8/view?usp=sharing)

### 📊 Risk Analysis Output

![Risk Result Screenshot](https://drive.google.com/file/d/1KhKapc_PMLEGwBFqiTGcqLx_aMcIaEGq/view?usp=sharing)

![Risk Result Screenshot](https://drive.google.com/file/d/1wm286BVIvDFC515JT1Efpi38U9Ic92dn/view?usp=sharing)

---

## 🧠 Problem Statement

Modern development teams deploy code rapidly without structured risk validation.  
This often leads to production failures, emergency hotfixes, and security risks.

There is no centralized AI control layer to validate deployment safety.

---

## 💡 Solution

DevGuard AI acts as an intelligent deployment gatekeeper.

Before any deployment, it:

- Fetches latest GitHub commits
- Checks open issues
- Detects risky patterns (hotfix, urgent, rollback, etc.)
- Calculates risk score (0–100)
- Provides recommendation:
  - ✅ SAFE TO DEPLOY
  - ⚠️ HIGH RISK

---

## 🏗 Architecture

![Architecture](https://drive.google.com/file/d/1l-RB0L_S2o8Ht5u0aTDbIcOo1ekCvc0y/view?usp=sharing)

Frontend Dashboard
↓
Node.js Backend API
↓
GitHub API (Commits + Issues)
↓
Risk Analysis Engine
↓
Deployment Recommendation
↓
(Archestra MCP Orchestration Layer)

---

## ⚙ Tech Stack

- Node.js
- Express.js
- GitHub REST API
- Render (Deployment)
- Archestra Platform
- MCP Integration

---

## 🧩 How Archestra is Used

Archestra acts as the centralized AI control plane:

- Orchestrates DevGuard Agent
- Connects securely to GitHub via MCP
- Enforces tool policies
- Provides governance and observability
- Enables multi-step reasoning

This transforms DevGuard from a simple app into a governed AI workflow system.

---

## 📊 Example Output

```json
{
  "repository": "facebook/react",
  "riskScore": 65,
  "status": "HIGH RISK ⚠️",
  "reasons": ["Risky keyword detected: hotfix", "High number of open issues"]
}
```

## 🛠 Installation (Local Setup)

## 🛠 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/devguard-ai.git
cd devguard-ai
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
node server.js
```

## 🏁 Future Improvements

- Slack approval workflow
- CI/CD integration
- Deployment blocking automation
- Risk history database
- Authentication & team roles
- AI-generated deployment explanation

## 👨‍💻 Author

Abhishek Prasad
Final Year Computer Science Student
Hackathon Submission – 2 Fast 2 MCP
