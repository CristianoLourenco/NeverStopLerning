// configuracao para abrir e fechar menu
const hamburguer = document.querySelector(' nav.menu .hamburguer .fas.fa-bars');
const header = document.querySelector('header');
const banner = document.querySelector('.banner');
const ul = document.querySelector('nav.menu ul');


  hamburguer.addEventListener('click', function(){
    ul.classList.toggle('active');
    header.classList.toggle('blok');
  })




// usando scrollReveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `.banner, .texto, .botao,
   #factos, .texto, .botao, .ilustracao,
   #hipoteses, .ilustracao, .texto, .botao,
   .conteudo, .texto, .botao, .ilustracao,
  #comentarios, .cards, .card,
  .content, .logo, #ul, .social `
  ,{interval: 100}
  )