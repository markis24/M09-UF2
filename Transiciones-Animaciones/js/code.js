$(document).ready(function(){
    // Ocultar todo el contenido del apartado "Sobre Nosaltres" al inicio
    $("#nosaltres .grup_nosaltres").hide();

    // Agregar un evento click al encabezado "Sobre Nosaltres"
    $("#nosaltres h2").click(function(){
        // Mostrar u ocultar el contenido del apartado excepto el título
        $(this).siblings(".grup_nosaltres").slideToggle();
    });
});
