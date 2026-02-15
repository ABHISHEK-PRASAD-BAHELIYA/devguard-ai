# 🛡 DevGuard AI

DevGuard AI is an MCP-powered deployment safety controller built using Archestra.

It analyzes GitHub commits and open issues before approving deployments and provides structured risk recommendations.

---

## 🚀 Problem

Teams deploy code quickly without structured risk validation.
This leads to production failures, hotfixes, and downtime.

---

## 💡 Solution

DevGuard AI connects to GitHub via MCP inside Archestra and:

- Fetches recent commits
- Checks open issues
- Detects risky keywords
- Generates deployment recommendation:
  - ✅ SAFE TO DEPLOY
  - ⚠️ HIGH RISK

---

## 🏗 Architecture

User → Archestra Agent → GitHub MCP → Risk Analyzer → Deployment Decision

---

## 🛠 Tech Stack

- Archestra Platform
- MCP Registry
- GitHub MCP Server
- JavaScript Risk Engine
- Tool Guardrails
- Observability Logs

---

## 📦 Setup

1. Run Archestra using Docker
2. Add GitHub MCP from MCP Registry
3. Configure GitHub token
4. Create DevGuard Agent
5. Enable GitHub tools
6. Use the system prompt from `agent-prompt.txt`

---

## 🎯 Output Format

```json
{
  "repository": "repo-name",
  "riskScore": 42,
  "status": "SAFE TO DEPLOY",
  "reasons": []
}
```

## 🏁 Future Improvements

- Slack approval workflow
- CI/CD pipeline integration
- Risk dashboard
- Auto deployment blocking
