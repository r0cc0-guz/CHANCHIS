document.addEventListener('DOMContentLoaded', () => {
    const enlacesActivos = document.querySelectorAll('a.enlace-social');
    
    enlacesActivos.forEach(enlace => {
        enlace.addEventListener('click', (evento) => {
            const url = enlace.getAttribute('href');
            window.open(url, '_blank', 'noopener,noreferrer');
        });
    });

    const imagenes = document.querySelectorAll('img');
    imagenes.forEach(imagen => {
        imagen.addEventListener('dragstart', (e) => e.preventDefault());
        imagen.addEventListener('contextmenu', (e) => e.preventDefault());
    });
});
