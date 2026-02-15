require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const analyzeRisk = require("./src/risk-analyzer");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Fetch commits from GitHub
async function fetchCommits(owner, repo) {
    const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/commits?per_page=5`,
        {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        }
    );
    return response.json();
}

// Fetch open issues
async function fetchIssues(owner, repo) {
    const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/issues?state=open`,
        {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        }
    );
    return response.json();
}

app.post("/analyze", async (req, res) => {
    try {
        const { owner, repo } = req.body;

        const commitsData = await fetchCommits(owner, repo);
        const issuesData = await fetchIssues(owner, repo);

        const commits = commitsData.map(c => ({
            message: c.commit.message
        }));

        const issues = issuesData.filter(i => !i.pull_request);

        const result = analyzeRisk(commits, issues);

        res.json({
            repository: `${owner}/${repo}`,
            ...result
        });

    } catch (error) {
        res.status(500).json({ error: "Failed to analyze repository" });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 DevGuard running on http://localhost:${PORT}`);
});
