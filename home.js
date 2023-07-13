var typingEffect = new Typed(".multi",{
    strings:["front end developer",],
    loop:true,
    typeSpeed:200,
    backSpeed:250,
    backDelay:1000,
})

const hamburger = document.querySelector(".nav-bar");
const navmenu = document.querySelector(".nav-ul");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})