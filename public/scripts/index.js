const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var today = new Date()
document.getElementById("footer-date").innerHTML = "" + months[today.getMonth()] + " " + today.getFullYear()