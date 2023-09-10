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