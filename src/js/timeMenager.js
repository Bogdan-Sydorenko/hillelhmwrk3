export let timeLeft = 85;

export function decrementTime() {
    if (timeLeft > 0) {
        timeLeft--;
        return true;
    }
    return false;
}

export function formatTime() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${minutes}:${seconds}`;
}