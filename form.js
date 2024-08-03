// Si usas un módulo importado
import emailjs from 'emailjs-com';

emailjs.init('jgAwVR-flCTKQnK_X');

document.addEventListener('DOMContentLoaded', function() {
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
