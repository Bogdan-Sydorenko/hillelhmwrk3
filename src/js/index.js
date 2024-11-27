import { timeLeft, decrementTime, formatTime } from './timeMenager.js';
import { updateTimerDisplay } from './ui.js';

function updateTimer() {
    const formattedTime = formatTime();
    updateTimerDisplay(formattedTime);

    if (!decrementTime()) {
        clearInterval(timerInterval); // Зупиняємо таймер, якщо час вичерпано
    }
}

const timerInterval = setInterval(updateTimer, 1000);