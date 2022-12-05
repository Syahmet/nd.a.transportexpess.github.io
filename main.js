var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

/* Move windon on click */

herder = document.getElementsByTagName('a');
lastScroll = 0;
herder[0].addEventListener('click', () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
});

herder[1].addEventListener('click', () => {
    window.scrollTo({ left: 0, top: 500, behavior: "smooth" });
});
herder[2].addEventListener('click', () => {
    window.scrollTo({ left: 0, top: document.body.scrollHeight - 500, behavior: "smooth" });
});
herder[3].addEventListener('click', () => {
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
});

lastScroll = 0;
window.addEventListener('scroll', () => {
    currScroll = window.pageYOffset;
    if (currScroll > 500) {
        window.classList.remove('active');
    }
});