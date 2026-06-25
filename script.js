document.addEventListener("DOMContentLoaded", () => {

```
// LOADER
const loader = document.createElement("div");
loader.className = "loader";
loader.innerHTML = "☕ Velvet Brew";
document.body.appendChild(loader);

setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";

    setTimeout(() => {
        loader.remove();
    }, 500);

}, 2000);

// HAMBURGER

const nav = document.getElementById("nav");
const hamburger = document.getElementById("hamburger");

if(hamburger){
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// DARK LIGHT MODE

const themeBtn = document.createElement("button");
themeBtn.innerHTML = "🌙";
themeBtn.style.position = "fixed";
themeBtn.style.right = "20px";
themeBtn.style.top = "90px";
themeBtn.style.zIndex = "1000";
document.body.appendChild(themeBtn);

if(localStorage.getItem("theme")==="light"){
    document.body.classList.add("light");
    themeBtn.innerHTML="☀️";
}

themeBtn.onclick = () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        localStorage.setItem("theme","light");
        themeBtn.innerHTML="☀️";
    }
    else{
        localStorage.setItem("theme","dark");
        themeBtn.innerHTML="🌙";
    }
};

// TYPING EFFECT

const heroTitle = document.getElementById("typing");

if(heroTitle){

    const text = "Luxury Coffee Experience";

    heroTitle.innerHTML = "";

    let i = 0;

    function type(){

        if(i < text.length){

            heroTitle.innerHTML += text.charAt(i);

            i++;

            setTimeout(type,100);
        }
    }

    type();
}

// REVEAL ANIMATION

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");
        }

    });

},{threshold:0.1});

document.querySelectorAll(
    "section,.card,.gallery-item"
).forEach(el=>{

    el.classList.add("reveal");

    observer.observe(el);
});

// BACK TO TOP BUTTON

const topBtn = document.createElement("div");

topBtn.id = "topBtn";

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

topBtn.onclick = () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};

// RESERVATION FORM

const form = document.querySelector("form");

if(form){

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert(
            "🎉 Reservation Confirmed!\n\nWe look forward to serving you."
        );

        form.reset();
    });

}

// FLOATING CURSOR GLOW

const glow = document.createElement("div");

glow.id = "cursorGlow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});
```

});
