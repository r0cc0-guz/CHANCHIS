document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.social-link');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Aquí puedes agregar las URLs reales de tus redes sociales
            const socialMedia = this.querySelector('span').textContent.toLowerCase();
            // Ejemplo: window.location.href = 'https://www.instagram.com/tu-usuario';
        });
    });
}); 