const hamburguer = document.querySelector(' nav.menu .hamburguer .fas.fa-bars');

hamburguer.addEventListener('click' ,()=>{
  hamburguer.classList.toggle('active')
})