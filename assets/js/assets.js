// configuracao para abrir e fechar menu
const hamburguer = document.querySelector(' nav.menu .hamburguer')
const header = document.querySelector('header')
const banner = document.querySelector('.banner')
const ul = document.querySelector('nav.menu ul')

// colocando o menu na tela
hamburguer.addEventListener('click', function () {
  ul.classList.toggle('active')
  hamburguer.classList.toggle('blok')
})
// retirando o menu da tela
ul.addEventListener('click', () => {
  hamburguer.classList.toggle('blok')
  ul.classList.toggle('active')
})

// usando scrollReveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 500,
  reset: true
})

scrollReveal.reveal(
  `.banner, .texto, .botao,
   #factos, .texto, .botao, .ilustracao,
   #hipoteses, .ilustracao, .texto, .botao,
   .conteudo, .texto, .botao, .ilustracao,
  #comentarios, .cards, .card,
  .content, .logo, #ul, .social `,
  { interval: 100 }
)
