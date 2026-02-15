async function runAnalysis() {

    const owner = document.getElementById("owner").value;
    const repo = document.getElementById("repo").value;

    const response = await fetch("/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ owner, repo })
    });

    const data = await response.json();

    document.getElementById("status").innerText = data.status;
    document.getElementById("score").innerText =
        "Risk Score: " + data.riskScore;

    const progressBar = document.getElementById("progress-bar");
    progressBar.style.width = data.riskScore + "%";

    progressBar.style.background =
        data.riskScore < 50 ? "green" : "red";

    const reasonsList = document.getElementById("reasons");
    reasonsList.innerHTML = "";

    data.reasons.forEach(reason => {
        const li = document.createElement("li");
        li.innerText = reason;
        reasonsList.appendChild(li);
    });
}
