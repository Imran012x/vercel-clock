function updateAnalogClock() {
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');
    const millisecondHand = document.querySelector('.millisecond-hand');

    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const milliseconds = now.getMilliseconds();

    const secondDeg = ((seconds / 60) * 360) + 90; // 90 degrees offset
    const minuteDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90; // +90 degrees offset
    const hourDeg = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90; // +90 degrees offset
    const millisecondDeg = ((milliseconds / 1000) * 360) + 90; // +90 degrees offset

    secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    millisecondHand.style.transform = `translateX(-50%) rotate(${millisecondDeg}deg)`;
}

// Update clock every 10 milliseconds for smoother movement of the millisecond hand
setInterval(updateAnalogClock, 10);

// Initial call
updateAnalogClock();
