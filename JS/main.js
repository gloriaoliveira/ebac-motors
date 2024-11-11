$(document).ready(function() {
   $("#carousel-imgs").slick({
     autoplay: true,
   });
 
   $(".menu-hamburguer").click(function() {
     $("nav").slideToggle();
   });
 
   $("#telefone").mask("(00) 00000-0000");
 
   $("form").validate({
     rules: {
       nome: {
         required: true,
       },
       email: {
         required: true,
         email: true,
       },
       telefone: {
         required: true,
       },
     },
     messages: {
       nome: "Por favor, insira o seu nome",
     },
     submitHandler: function(form) {
       // Esta linha simplesmente impede o comportamento padrão
       // de enviar o formulário para um novo URL ou recarregar a página.
       form.preventDefault();
       console.log("Formulário validado e pronto para ser enviado!");
       // Se necessário, adicione aqui o envio manual do formulário
       // form.submit(); ou faça ajax submit
     },
     invalidHandler: function(evento, validador) {
       let camposIncorretos = validador.numberOfInvalids();
       if (camposIncorretos) {
         alert(`Existem ${camposIncorretos} campos incorretos`)
       }
     }
   });

   $('.lista-veiculos button').click(function() {
      const destino = $('#contato');
      const nomeVeiculo = $(this).parent().find('h3').text();

      $('veiculo-interesse').val(nomeVeiculo);

      $('html').animate({
         scrollTop: destino.offset().top
      }, 1000)
   })
 });
 