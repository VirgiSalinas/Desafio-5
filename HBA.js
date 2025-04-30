document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validación simple
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    
    if(nombre.trim() === '' || email.trim() === '') {
        alert('Por favor complete los campos obligatorios (*)');
        return;
    }
    
    // Aquí iría la lógica para enviar el formulario (AJAX, Fetch, etc.)
    alert('¡Gracias por su mensaje! Nos contactaremos pronto.');
    this.reset();
});

//header
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});