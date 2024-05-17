const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let today = new Date();
document.getElementById("footer-date").innerHTML = "" + months[today.getMonth()] + " " + today.getFullYear();









const shareBtn = document.querySelector('.share-btn');
const shareOptions = document.querySelector('.share-options');

shareBtn.addEventListener('click', () => {
  shareOptions.classList.toggle('active');
});


function copyTextToCB() {
  let copyText = document.getElementById("share-link").innerHTML;
  navigator.clipboard.writeText(copyText);
  alert("Succesfully copied text to the clipboard: " + copyText);
}

window.copyTextToCB = copyTextToCB