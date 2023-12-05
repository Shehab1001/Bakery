window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");

    loader.addEventListener("transitioned", () => {
        document.body.removeChild("loader")
    })
})


window.onscroll = function () {
    var navbar = document.querySelector('.nav-bar');
    var defaultLogo = document.querySelector('.default-logo');
    var scrolledLogo = document.querySelector('.scrolled-logo');

    if (window.scrollY > 5) {
        navbar.classList.add('scrolled');
        defaultLogo.style.display = 'none';
        scrolledLogo.style.display = 'block';
        
    } else {
        navbar.classList.remove('scrolled');
        defaultLogo.style.display = 'block';
        scrolledLogo.style.display = 'none';
    }
};