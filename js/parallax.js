$(document).ready(function(){

    $(window).scroll(function(){
        var windowWidth=$(window).width();

        if(windowWidth>800){
            var scroll=$(window).scrollTop();

            $('header .textos .contenedor-textos').css({
                'transform' : 'translate(0px, '+ scroll/1.5 +'%)'
            });

            $('header .textos .logo').css({
                'transform' : 'translate(0px, '+ scroll*.8 +'px)'
            });

            $('header .textos .personaje-animado').css({
                'transform' : 'translate(0px, '+ scroll*.2 +'px)'
            });
            $('.acerca-de article').css({
                'transform' : 'translate(0px, -'+ scroll/3 +'%)'
            });

        }

        $(window).resize(function(){
            var windowWidth=$(window).width();
            if(windowWidth<800){
                $('.acerca-de article').css({
                    'transform' : 'translate(0px, 0px)'
                });
            }
        });
    });

    var acercaDe= $('#acerca-de').offset().top,
    ranking= $('#Ranking').offset().top,
    estadisticas= $('#estadisticas').offset().top;
  
    
    $('#btn-categoria').on('click',function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop:acercaDe-220
    }, 500);
    });
    
    $('#btn-rankig').on('click',function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop:ranking-110
    }, 500);
    });
    
    $('#btn-avance').on('click',function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop:estadisticas
    }, 500);
    });
    
  
   
});