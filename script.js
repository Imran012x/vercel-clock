function updateClock() {
    const now = new Date();
    const milliseconds = now.getMilliseconds();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');
    const millisecondHand = document.getElementById('millisecond-hand');
    const digitalClock = document.getElementById('digital-clock');

    const hourDegrees = (hours % 12) * 30 + (minutes / 60) * 30;
    const minuteDegrees = minutes * 6 + (seconds / 60) * 6;
    const secondDegrees = seconds * 6 + (milliseconds / 1000) * 6;
    const millisecondDegrees = milliseconds * 0.36;

    hourHand.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
    millisecondHand.style.transform = `translateX(-50%) rotate(${millisecondDegrees}deg)`;

    digitalClock.textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 10);
updateClock();
