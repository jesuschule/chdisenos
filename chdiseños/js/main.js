
/*----------------------------------
Iniciamos smoothScroll (Scroll Suave)
--------------------------------*/
smoothScroll.init({
    speed: 2000, // Integer. How fast to complete the scroll in milliseconds
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels

});

/*---------------------------------
    OCULTAR Y MOSTRAR BOTON IR ARRIBA
 ----------------------------------*/
 /*----------------------------------
muy importante el jquery para que se cierre el menu desplegable al hacer click en uno de sus enlaces
--------------------------------*/
  $('.navbar-collapse>ul>li>a').click(function() {
     $('.navbar-collapse').collapse('hide');});
/*------------------------
INICIAMOS WOW
-------------------------*/
new WOW().init();
/*------------------------
INICIAMOS WOW
-------------------------*/


