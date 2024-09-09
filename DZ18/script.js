
let timerDuration = 75; // Время в секундах, если вдруг что

function startTimer(duration) {
    let timer = duration;
    let minutes, seconds;

    const interval = setInterval(function () {

        minutes = Math.floor(timer / 60);
        seconds = timer % 60;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById('timerDisplay').textContent = minutes + ":" + seconds;
        timer--
        if (timer < 0) {
            clearInterval(interval);
            document.getElementById('timerDisplay').textContent = "Время вышло!"; // Сообщение
        }
    }, 1000);
}


startTimer(timerDuration);