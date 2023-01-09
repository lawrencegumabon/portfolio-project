// function myFunction(){
//     var element = document.body;
//     element.classList.toggle("dark-mode");
// }

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon-fill');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = '#F3F3F3';
        body.style.color = '#303841';
        body.style.transition = '0.5s';
    }else{
        body.style.background = '#303841';
        body.style.color = '#F3F3F3';
        body.style.transition = '0.5s';
    }
})

const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    links.classList.toggle("active");
}) 

document.querySelectorAll(".links").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    links.classList.remove("active");
}))

function togglePopup(){
    var form = document.getElementById("form-box");
    if(form.style.display === "none"){
        form.style.display = "block";
    }else{
        form.style.display = "none";
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

