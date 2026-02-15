function analyzeRisk(commits, issues) {
    const riskyKeywords = [
        "hotfix",
        "urgent",
        "patch",
        "rollback",
        "temporary",
        "critical"
    ];

    let riskScore = 0;
    let reasons = [];

    // Analyze commits
    commits.forEach(commit => {
        const message = commit.message.toLowerCase();
        riskyKeywords.forEach(keyword => {
            if (message.includes(keyword)) {
                riskScore += 15;
                reasons.push(`Risky keyword detected: ${keyword}`);
            }
        });
    });

    // Analyze issues
    if (issues.length > 3) {
        riskScore += 30;
        reasons.push("More than 3 open issues");
    }

    const status = riskScore >= 50 
        ? "HIGH RISK" 
        : "SAFE TO DEPLOY";

    return {
        riskScore,
        status,
        reasons
    };
}

module.exports = analyzeRisk;
