if (/Mobi|Android/i.test(navigator.userAgent)) {
    window.location.href = 'mobile.html'; // Redirect to unsupported.html
}
function displayCurrentDate() {
    var currentDate = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString('en-US', options);

    document.getElementById('currentDate').textContent = formattedDate;
}

function updateCountdown() {
    // Define the target date (01.12.23 in dd.mm.yy format)
    const targetDate = new Date('2023-12-01');

    // Get the current date
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = targetDate - currentDate;

    // Calculate the number of days
    const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Display the countdown in an HTML element
    document.getElementById('countdown').textContent = daysRemaining + " days";
}

// Update the current date and countdown initially
displayCurrentDate();
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);