document.addEventListener('DOMContentLoaded', () => {
    const enlacesActivos = document.querySelectorAll('a.enlace-social');
    
    enlacesActivos.forEach(enlace => {
        enlace.addEventListener('click', (evento) => {
            evento.preventDefault();
            const url = enlace.getAttribute('href');
            const tipo = enlace.querySelector('span').textContent;
            
            // Crear y mostrar el cartel
            const cartel = document.createElement('div');
            cartel.className = 'cartel-agradecimiento';
            
            // Agregar el texto y el GIF
            cartel.innerHTML = `
                <div>¡Gracias por ingresar a mi ${tipo}!</div>
                <img src="img/melody-back.gif" alt="Melody">
            `;
            document.body.appendChild(cartel);
            
            // Mostrar el cartel con una animación suave
            requestAnimationFrame(() => {
                cartel.style.display = 'block';
                cartel.style.opacity = '0';
                requestAnimationFrame(() => {
                    cartel.style.transition = 'opacity 0.3s ease';
                    cartel.style.opacity = '1';
                });
            });
            
            // Redireccionar después de 2.5 segundos
            setTimeout(() => {
                window.open(url, '_blank', 'noopener,noreferrer');
                cartel.style.opacity = '0';
                setTimeout(() => {
                    cartel.remove();
                }, 300);
            }, 2500);
        });
    });

    const imagenes = document.querySelectorAll('img');
    imagenes.forEach(imagen => {
        imagen.addEventListener('dragstart', (e) => e.preventDefault());
        imagen.addEventListener('contextmenu', (e) => e.preventDefault());
    });
});
