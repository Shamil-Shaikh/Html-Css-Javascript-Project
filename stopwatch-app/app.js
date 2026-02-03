let timer;
let seconds = 0;

function start() {
    if (timer) return;

    timer = setInterval(() => {
        seconds++;

        let hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
        let mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
        let secs = String(seconds % 60).padStart(2, "0");

        document.getElementById("display").textContent =
            `${hrs}:${mins}:${secs}`;
    }, 1000);
}

function stop() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    stop();
    seconds = 0;
    document.getElementById("display").textContent = "00:00:00";
}




