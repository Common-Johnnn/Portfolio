// Fixed Navigation Bar On Scroll
window.addEventListener('scroll', function() {
    var header = this.document.querySelector('.navbar');
    header.classList.toggle("sticky", window.scrollY > 0)
});

// Eyes follow mouse cursor
var navEyeBall = document.getElementsByClassName("nav-eye-ball"); 
document.onmousemove = function() {
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    // event.clientX => get the horizontal coordinate of the onmouse move
    // window.innerWidth => get the browser width

    for (var i = 0; i < 2; i++){
        navEyeBall[i].style.left = x;
        navEyeBall[i].style.top = y;
        navEyeBall[i].style.transform = "translate(- "+ x +", - "+ y +")";
    }
}

// Auto Typing Text Effect
var typed = new Typed(".auto-input", {
    strings: ["DEVELOP", "DESIGN"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
})