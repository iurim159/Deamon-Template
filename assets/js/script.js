let header = document.querySelector('header');
let scrollPrevious = window.pageYOffset;
window.onscroll = function(){
    let scrollCurrent = window.pageYOffset;
    if(scrollPrevious > scrollCurrent){
        header.style.top = "0px";
    }
    else{
        header.style.top = "-100%";
    }
    scrollPrevious = scrollCurrent;
}

//reveal on scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
  
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
  
  window.addEventListener("scroll", reveal);

//loader
  window.addEventListener('load', e =>{
    const loader= document.getElementById('loading-wrapper');
    loader.style.display = 'none';
});

