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


$('a.link').click(function(event) {
    event.preventDefault();
    $('div.content').html($('div', this).html());
  });