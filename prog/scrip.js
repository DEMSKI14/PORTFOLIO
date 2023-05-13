/* ===================== toggle icon navbar======================= */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* ===================== scrol section active link======================= */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    /* ===================== remove toggle icon and navbar when click navbar link (scroll)======================= */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/* ===================== scrol reveal======================= */

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay:200 
});
    
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* ===================== typed js ======================= */
const typed = new Typed('.multiple-text',{
    strings: ['Frontend Web Developer.'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true
});

// Replace YOUR_EMAIL_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_USER_ID with your actual EmailJS values
const emailServiceId = 'service_1ho65g1';
const templateId = 'template_s7051de';
const userId = '-HNVuaNm2L2v-Zuvt';

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('email-subject').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send(emailServiceId, templateId, {
        from_name: fullName,
        email: email,
        subject: subject,
        message: message
    }, userId)
    .then(function(response) {
        console.log('Email sent successfully!', response.status, response.text);
        // You can display a success message to the user here
    }, function(error) {
        console.error('Error sending email:', error);
        // You can display an error message to the user here
    });

    // Clear form inputs
    document.getElementById('full-name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('email-subject').value = '';
    document.getElementById('message').value = '';
});

