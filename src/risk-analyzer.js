function analyzeRisk(commits, issues) {
    const riskyKeywords = [
        "hotfix",
        "urgent",
        "patch",
        "rollback",
        "temporary",
        "critical",
        "fix"
    ];

    let riskScore = 0;
    let reasons = [];

    commits.forEach(commit => {
        const message = commit.message.toLowerCase();
        riskyKeywords.forEach(keyword => {
            if (message.includes(keyword)) {
                riskScore += 10;
                reasons.push(`Risky keyword detected: ${keyword}`);
            }
        });
    });

    if (issues.length > 3) {
        riskScore += 30;
        reasons.push("High number of open issues");
    }

    if (riskScore > 100) riskScore = 100;

    const status = riskScore >= 50 
        ? "HIGH RISK ⚠️" 
        : "SAFE TO DEPLOY ✅";

    return {
        riskScore,
        status,
        reasons
    };
}

module.exports = analyzeRisk;
