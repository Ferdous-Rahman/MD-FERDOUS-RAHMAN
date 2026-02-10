// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().replace('T', ' ').substring(0, 19);
    alert('Current Date and Time (UTC): ' + formattedDate);
});