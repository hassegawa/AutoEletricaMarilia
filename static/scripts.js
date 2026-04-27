document.addEventListener("DOMContentLoaded", function () {
    // Lógica para abrir/fechar o menu lateral
    const sidebar = document.querySelector('.sidebar');
    const navbarToggler = document.querySelector('.navbar-toggler');

    navbarToggler.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });
});
