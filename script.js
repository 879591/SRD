console.log("Supriya Digital Research Website Loaded Successfully");

window.addEventListener("scroll", function () {

const nav = document.querySelector("nav");

if (window.scrollY > 50) {
nav.classList.add("shadow-2xl");
}
else {
nav.classList.remove("shadow-2xl");
}

});