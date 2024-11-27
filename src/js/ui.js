export function updateTimerDisplay(time) {
    const timerElement = document.getElementById('timer');
    if (timerElement) {
        timerElement.innerText = time;
    }
}