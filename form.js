// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa EmailJS con tu User ID
    emailjs.init('jgAwVR-flCTKQnK_X');

    // Obtén el formulario por su ID
    const form = document.getElementById('contact-form');

    // Añade un event listener al formulario para el evento submit
    form.addEventListener('submit', function(event) {
        // Previene la acción por defecto del formulario (recarga de página)
        event.preventDefault();

        // Envía el formulario usando EmailJS
        emailjs.sendForm('service_066w7i9', 'template_q7peraq', form)
            .then(function(response) {
                // Muestra un mensaje de éxito si el envío fue exitoso
                alert('¡Mensaje enviado con éxito!');
                // Resetea el formulario
                form.reset();
            }, function(error) {
                // Muestra un mensaje de error si ocurrió un problema
                alert('Ocurrió un error: ' + JSON.stringify(error));
            });
    });
});

