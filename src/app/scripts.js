$(document).ready(function(){
    // Inicializa el carousel de Bootstrap
    $('#colaboradores').carousel();

    // Configura la velocidad de desplazamiento y dirección
    $('#colaboradores').carousel({
        interval: 300, // Cambia cada 3 segundos
        pause: 'hover' // Pausa en hover del mouse
    });
});