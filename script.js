async function runDemo() {
    const terminal = document.getElementById("terminal");

    terminal.innerHTML += "Initializing HERETIC-AI...\n";

    await delay(500);
    terminal.innerHTML += "Running reconnaissance...\n";

    const scan = await fetch("data/demo_scan.json").then(r => r.json());
    const chain = await fetch("data/demo_chain.json").then(r => r.json());
    const report = await fetch("data/demo_report.json").then(r => r.json());

    await delay(1000);

    terminal.innerHTML += "Analyzing target...\n";

    document.getElementById("summary").innerText = report.summary;
    document.getElementById("chain").innerText = JSON.stringify(chain, null, 2);
    document.getElementById("score").innerText =
        "Risk: " + report.risk + "\nConfidence: " + report.confidence;

    terminal.innerHTML += "Attack chain generated.\n";
    terminal.innerHTML += "Risk score calculated.\n";
    terminal.innerHTML += "Ready.\n";
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
