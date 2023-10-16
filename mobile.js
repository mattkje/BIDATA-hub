/**
 * Checks if device is mobile, and redirects the device to mobile.html
 * if device is mobile.
 */
if (!/Mobi|Android/i.test(navigator.userAgent)) {
    window.location.href = 'index.html';
}

/**
 * This method should display current date (weekday, month, day, year)
 */
function displayCurrentDate() {
    var currentDate = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString('en-US', options);

    document.getElementById('currentDate').textContent = formattedDate;
}

/**
 * This method should display a countdown in an HTML element from
 * a set date.
 */
function updateCountdown() {
    const targetDate = new Date('2023-12-01');
    const currentDate = new Date();

    const timeDifference = targetDate - currentDate;
    const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    document.getElementById('countdown').textContent = daysRemaining + " days";
}


displayCurrentDate();
updateCountdown();
setInterval(updateCountdown, 1000);