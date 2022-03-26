const timerBlock = document.querySelector(".timer__time");
const deadLine = "26 march 2022";

let interval;

const updateClock = () => {
    const dat = new Date().getTime();
    const datNew = new Date(deadLine).getTime();
    const timeRemaining = (datNew - dat) / 1000;

    const hours = Math.floor(timeRemaining / 60 / 60);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor((timeRemaining) % 60);

    const formatHours = hours < 10 ? "0" + hours : hours;
    const formatMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formatSeconds = seconds < 10 ? "0" + seconds : seconds;

    timerBlock.textContent = `${formatHours}:${formatMinutes}:${formatSeconds}`;

    if (timeRemaining <= 0) {
        clearInterval(interval);
        timerBlock.textContent = "00:00:00";
    }
}

interval = setInterval(updateClock, 500);