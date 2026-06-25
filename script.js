const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
themeBtn.innerHTML="☀️";
}else{
themeBtn.innerHTML="🌙";
}

});

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.style.opacity=1;
entry.target.style.transform="translateY(0)";
}

});

});

document.querySelectorAll(
".card,.review,.about,.contact"
).forEach(el=>{

el.style.opacity=0;
el.style.transform="translateY(60px)";
el.style.transition=".8s";

observer.observe(el);

});
