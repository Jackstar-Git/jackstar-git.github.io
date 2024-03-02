const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let today = new Date()
document.getElementById("footer-date").innerHTML = "" + months[today.getMonth()] + " " + today.getFullYear()