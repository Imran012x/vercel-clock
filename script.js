function createTicks() {
    const ticksContainer = document.querySelector('.ticks');
    for (let i = 0; i < 60; i++) {
        const tick = document.createElement('div');
        tick.classList.add('tick');

        // Set the position of each tick
        const angle = (i * 6); // 360° / 60 ticks
        const rotate = `rotate(${angle}deg) translateY(-90px)`; // Position ticks outward from center

        tick.style.transform = rotate;

        // Color the ticks using HSL
        tick.style.background = `hsl(${(i * 6)}, 100%, 50%)`; // Color wheel effect
        
        ticksContainer.appendChild(tick);
    }
}

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

    // Set the active tick
    const ticks = document.querySelectorAll('.tick');
    ticks.forEach(tick => tick.classList.remove('active')); // Remove active class from all ticks
    ticks[minutes].classList.add('active'); // Add active class to the current minute tick

    digitalClock.textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 10);
createTicks();
updateClock();
