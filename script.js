function Mudarestado(el) {
    var display = document.getElementById(el).className;
    var divId = document.getElementById(el);
    var icon = document.getElementsByClassName("icone-seta");

    if(display == "d-none"){
        divId.className = "d-block";
        icon[0].className = "fas fa-chevron-up icone-seta";
        var elemento = "#"+el;
        console.log(elemento);
        rolar_para(elemento);
    }else{
        divId.className = "d-none";
        icon[0].className = "fas fa-chevron-down icone-seta";
}}

function rolar_para(element){
  $('html, body').animate({
    scrollTop : $(element).offset().top
  }, 500);
}


$(document).ready(function(){

  if($.trim($("#content").html()) == ''){
    ajaxTipo(retornaArquivo('Entradas'), false);
  }

  $('.getpage').click(function() {

    var tipo = retornaArquivo($(this).text());

    var href = $(this).attr("href");

    if(href.substring(0,1) == "#"){
      ajaxTipo(tipo, true);
    }else{
      ajaxTipo(tipo, false);
    }

    
  });

});

function ajaxTipo(tipo, anima){
  $.ajax({
    url:tipo,
    dataType:'html',
    success:function(html){
        $("#content").fadeOut(0).html(html).fadeIn(500);
        if(anima){
          $('html, body').animate({
            scrollTop : $("#content").offset().top
          }, 500);
        }
       
  }});
}

function retornaArquivo(texto){
  switch(texto){
    case 'Entradas':
        return "entradas.php";
    break;
    case 'Hot Roll':
        return "hotroll.php";
    break;
    case 'Combinados':
        return "combinados.php";
    break;
    case 'Temakis':
        return "temakis.php";
    break;
    case 'Niguiris':
        return "niguiris.php";
    break;
    case 'Uramakis':
        return "uramakis.php";
    break;
    case 'Hossomakis':
        return "hossomakis.php";
    break;
    case "Gunkan":
        return "gunkan.php";
    break;
    case 'Bebidas':
        return "bebidas.php";
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

/*funcao para menu principal*/
$(function(){
  $(".button-collapse").sideNav();
});


