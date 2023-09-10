const track = document.querySelector('.carrossel__track');
const slides = Array.from(track.children);
const nextBotao = document.querySelector('.carrossel__botao--direito');
const prevBotao = document.querySelector('.carrossel__botao--esquerdo');

const botaoCode = document.querySelector('#botao-code')
const botaoArt = document.querySelector('#botao-art')
const botaoFilm = document.querySelector('#botao-film')

const secaoCode = document.querySelector('#secao-code')
const secaoArt = document.querySelector('#secao-art')
const secaoFilm = document.querySelector('#secao-film')

let secoes = [secaoCode, secaoArt, secaoFilm];
let selected = 0;

function updateCarrossel(newSel){
  secoes[selected].style.display = 'none';
  secoes[newSel].style.display = 'grid';
  selected = newSel;
}

function cycleRight(){
  if((selected + 1) >= secoes.length){return}
  updateCarrossel(selected + 1);
}

function cycleLeft(){
  if((selected - 1) < 0){return}
  updateCarrossel(selected-1);
}

nextBotao.addEventListener('click', cycleRight)
prevBotao.addEventListener('click', cycleLeft)

botaoCode.addEventListener('click', () => {
  secaoCode.style.display = 'grid';
  secaoArt.style.display = 'none';
  secaoFilm.style.display = 'none';
})

botaoArt.addEventListener('click', () => {
  secaoCode.style.display = 'none';
  secaoArt.style.display = 'grid';
  secaoFilm.style.display = 'none';
})

botaoFilm.addEventListener('click', () => {
  secaoCode.style.display = 'none';
  secaoArt.style.display = 'none';
  secaoFilm.style.display = 'grid';
})












































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









function snack() {
  const email = document.querySelector('#email-form').value;
  const phone = document.querySelector('#phone-form').value;
  const name = document.querySelector('#name-form').value;
  const assunto = document.querySelector('#assunto-form').value;
  const msg = document.querySelector('#msg-form').value;

  const snack = document.querySelector('#snackbar__formulario');

  const regexPhone = new RegExp("[0-9]{2} [0-9]{5} [0-9]{4}");
  const regexEmail = new RegExp("^\\w+([.-_]\\w+)*@\\w+(.\\w+)+$", "i");

  let listaErros = [];

  // console.log(snack);
  if (!regexPhone.test(phone)) {
    listaErros.push("phone");
  }
  if (!regexEmail.test(email)) {
    listaErros.push("email");
  }
  if (name.length === 0) {
    listaErros.push("nome");
  }
  if (assunto.length === 0) {
    listaErros.push("assunto");
  }
  if (msg.length === 0) {
    listaErros.push("mensagem");
  }

  if (listaErros.length > 0) {
    snack.textContent = "Campos inválidos: " + listaErros.join(", ");
  }

  else {
    snack.textContent = "Email enviado com sucesso";
  }

  const snackbar = document.querySelector('#snackbar__formulario');
  snackbar.className = "show";
  setTimeout(function () { snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}






