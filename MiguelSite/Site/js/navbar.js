const barra = document.querySelector('.botao-barra')
const navbar = document.querySelector('.navbar')
let scroll = window.scrollY

let barraAtiva = false;

barra.addEventListener('click', () => {
  const navLista = document.querySelector('.navbar__lista')

  if (barraAtiva) {
    barra.style.rotate = "none";
    navLista.style.right = "-200%"
    barraAtiva = false;
    if (scroll > 50) {
      navbar.style.backgroundColor = null
    }
  }
  else {
    barra.style.rotate = "-180deg";
    navLista.style.right = "0%"
    barraAtiva = true;
    if (scroll > 50) {
      navbar.style.backgroundColor = "black"
    }
  }
})

window.addEventListener('scroll', () => {
  scroll = window.scrollY

  if (barraAtiva && scroll > 50) {
    navbar.style.backgroundColor = "black"
  }
  else {
    navbar.style.backgroundColor = null
  }

})