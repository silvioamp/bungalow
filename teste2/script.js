function Mudarestado(el) {
    var display = document.getElementById(el).className;
    var divId = document.getElementById(el);
    var icon = document.getElementsByClassName("icone-seta");
    console.log(icon);

    if(display == "d-none"){
        divId.className = "d-block";
        icon[0].className = "fas fa-chevron-up icone-seta";
    }else{
        divId.className = "d-none";
        icon[0].className = "fas fa-chevron-down icone-seta";
}}


$(document).ready(function(){

  if($.trim($(".content").html()) == ''){
    ajaxTipo('entradas');
  }

  $('.getpage').click(function() {

    var tipo = retornaArquivo($(this).text());

    ajaxTipo(tipo);
 
    
  });

});

function ajaxTipo(tipo){
  $.ajax({
    url:tipo,
    dataType:'html',
    success:function(html)
{
  $(".content").fadeOut(0).html(html).fadeIn(500);
}    });
}

function retornaArquivo(texto){
  switch(texto){
    case 'Entradas':
        return "entradas";
    break;
    case 'Hot Roll':
        return "hotroll";
    break;
    case 'Combinados':
        return "combinados";
    break;
    case 'Temakis':
        return "temakis";
    break;
    case 'Niguiris':
        return "niguiris";
    break;
    case 'Uramakis e outros':
        return "uramakis";
    break;
    case "Joy's":
        return "joys";
    break;
    case 'Bebidas':
        return "bebidas";
    break;

  }
}




$('a.link').click(function(event) {
  event.preventDefault();
  $('div.content').html($('div', this).html());
});


jQuery(document).ready(function() {
  $(window).scroll(function () {
      var set = $(document).scrollTop()+"px";
      jQuery('#cubo').animate({
          top:set
      },
      {
          duration:1000,
          queue:false
      });
  });
});


$(function(){
  $(".button-collapse").sideNav();
});