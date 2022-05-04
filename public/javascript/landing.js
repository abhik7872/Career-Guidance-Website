const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        burger.classList.toggle('toggle');
    });
}

const signUpChoices = () => {
    const popup = document.getElementById("choice");
    const btn = document.getElementById("signUp");
    const span = document.getElementsByClassName("close")[0];

    btn.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    span.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == popup) {
            popup.style.display = 'none';
        }
    });
}

navSlide();
signUpChoices();