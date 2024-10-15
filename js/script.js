function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


//carrusell

let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

// Mostrar las imágenes
function showSlides() {
    const offset = currentIndex * -33.33; // Ajustar para mostrar 3 imágenes
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    currentIndex += direction;

    // Reiniciar el índice si se sale de los límites
    if (currentIndex < 0) {
        currentIndex = totalSlides - 3; // Volver al tercer último
    } else if (currentIndex > totalSlides - 3) {
        currentIndex = 0; // Volver al primero
    }

    showSlides();
}

// Configurar el carrusel automático
setInterval(() => {
    currentIndex++;
    if (currentIndex > totalSlides - 3) {
        currentIndex = 0; // Volver al principio
    }
    showSlides();
}, 3000); // Cambiar cada 3 segundos

showSlides(); // Mostrar las imágenes al cargar


/* toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/* scroll sections active link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* sticky navbar */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* remove toggle icon ann navbar when click navbar link (scroll)*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* scroll reveal  */
ScrollReveal({ 
   // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.Accueil-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.Accueil-img, .apropos-content, .compétences-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.Accueil-content h1, .apropos-img', { origin: 'left' });
ScrollReveal().reveal('.Accueil-content p, .apropos-content', { origin: 'right' });

/* typed js */
const typed = new Typed('.multiple-text', {
    strings: ['Front-end Developer Junior', 'Back-end Developer Junior'],
    typeSpeed: 100,
    backspeed: 100,
    backDelay: 1000,
    loop: true
})

/* validacion de formulario */
