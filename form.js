import emailjs from 'https://cdn.jsdelivr.net/npm/emailjs-com@3.2.0/dist/email.min.js';

document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('jgAwVR-flCTKQnK_X');

    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_066w7i9', 'template_q7peraq', form)
            .then(function(response) {
                alert('¡Mensaje enviado con éxito!');
                form.reset();
            }, function(error) {
                alert('Ocurrió un error: ' + JSON.stringify(error));
            });
    });
});
