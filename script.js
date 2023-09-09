// script.js
document.addEventListener('DOMContentLoaded', function () {
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];

    // Get current UTC time
    const utcTime = currentDate.toISOString().split('T')[1].substring(0, 8); // Extract HH:mm:ss from UTC timestamp

    currentDayElement.textContent = `Current Day: ${currentDayOfWeek}`;
    currentUTCTimeElement.textContent = `Current UTC Time: ${utcTime}`;
});
