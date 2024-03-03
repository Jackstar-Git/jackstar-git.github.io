const elements = document.querySelectorAll(".timeline-dot");

window.addEventListener("scroll", (e) => {
    elements.forEach((e, index) => {
        const viewPortRelation = e.getBoundingClientRect();
        
        if(viewPortRelation.top < window.innerHeight / 1.15) {
            document.querySelectorAll(".timeline-content")[index].style.animation = "fly-in 1s 0s forwards ease";
            document.querySelectorAll(".timeline-content")[index].style.visibility = "visible";
        }
    })
})