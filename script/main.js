const scrollBtn = document.querySelector('.upBtn');
const navclay = document.querySelector('.nav-clay');

window.onscroll = () => {
    if (window.scrollY > 100) {
        scrollBtn.classList.remove('upBtn_hide');
        navclay.classList.remove('navclay_hide');
    } else if (window.scrollY < 100) {
        scrollBtn.classList.add('upBtn_hide');
        navclay.classList.add('navclay_hide');
    };
};

scrollBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};