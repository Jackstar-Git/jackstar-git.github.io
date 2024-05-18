const toggleButtons = document.querySelectorAll('.toggleButton');
const htmlElement = document.querySelector('html');
  

function setButtonText(button){
    if (htmlElement.classList.contains("light-mode")){
        button.innerHTML = "<i class='fa-solid fa-sun'></i>";
        localStorage.setItem("darkMode", "false");
      }
    else{
      button.innerHTML = "<i class='fa-solid fa-moon'></i>";
      localStorage.setItem("darkMode", "true");
    }
}

function toggleMode(button){
    htmlElement.classList.toggle('light-mode')
    setButtonText(button);
}

if (localStorage.getItem("darkMode") === null) {
    localStorage.setItem("darkMode", "true");
}
  
if (localStorage.getItem("darkMode") != "true"){
  htmlElement.classList.add('light-mode');
}


toggleButtons.forEach(button => {
    setButtonText(button);
    button.addEventListener('click', () => toggleMode(button));
  });