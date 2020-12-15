<!DOCTYPE html>
<html>
<head>
     <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
     <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css"/>
     <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
     <link rel="stylesheet" type="text/css" href="teste2.css">
 </head>
 <body>
 <nav>
     <div class="nav-wrapper">
         <a href="#" class="brand-logo"><img src="img/logo-bungalow.png"></a>
         <a href="#" data-activates="menu-mobile" class="button-collapse">
             <i class="material-icons">menu</i>
         </a>
        
         <ul class="side-nav" id="menu-mobile">
             <li><a href="#">Início</a></li>
             <li><a href="#">Cardápio</a></li>
             <li><a href="#">Fotos</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="https://www.facebook.com/bungalowsushi/?ref=py_c"><i class="fab fa-facebook-square fa-2x sociais"></i></a></li>
				    <li><a href="https://www.instagram.com/bungalowsushi/"><i class="fab fa-instagram fa-2x sociais"></i></a></li>
         </ul>
     </div>
 </nav>
     <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
     <script>
 $(function(){
     $(".button-collapse").sideNav();
 });
 </script>
 </body>
 </html>