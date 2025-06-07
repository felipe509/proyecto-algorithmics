document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.enlaces');
    const body = document.body; // Obtenemos el elemento body

    // DEPURACIÓN
    console.log('Botón Hamburguesa:', hamburgerMenu);
    console.log('Enlaces de Navegación:', navLinks);
    console.log('Elemento Body:', body);

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.classList.toggle('menu-open'); // Alterna la clase 'menu-open' en el body
    });
});