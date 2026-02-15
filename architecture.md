---

# 2️⃣ architecture.md

```markdown
# Architecture Overview

## Components

### 1. Archestra Control Plane
Central AI runtime environment.

### 2. DevGuard Controller Agent
Multi-step reasoning agent responsible for:

- Calling GitHub MCP tools
- Analyzing commits
- Evaluating issues
- Producing structured output

### 3. GitHub MCP Server
Provides access to:
- Repository data
- Commit history
- Open issues

---

## Data Flow

1. User requests deployment validation
2. Agent calls GitHub MCP tools
3. Data is processed
4. Risk score is calculated
5. Deployment recommendation returned

---

## Security & Governance

- Tool policies restrict unsafe actions
- Observability logs track every decision
- Centralized orchestration prevents rogue AI execution
