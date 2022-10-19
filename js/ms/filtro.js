import {exibirInfo, correcaoDasTags, janela} from './populador.js';
import {diferencaData, arrayData, end} from './filtrarDados.js'
export {filtrarPelosDias, end}

const radio = document.querySelectorAll('[data-filtro]')
const close = document.querySelector('#closebutton')
let click = true
let check = true

close.addEventListener('click', (evento) => {
    closebutton()
    close.parentElement.parentElement.childNodes[1].checked = false
    exibirInfo(end);
    janela();
})

radio.forEach((elemento) => {
  if (elemento.checked == true) {
    console.log(`filtro checado é ${parseInt(elemento.dataset.valor)}`)
    exibirInfo(filtrarPelosDias(elemento.dataset.valor));
    janela();
    if(check==false) {
      elemento.checked = false
      console.log(check)
    }
  }
})

radio.forEach((elemento) => {
  elemento.addEventListener('click', (evento) => {
    if (elemento.checked == true) {
      console.log(`filtro checado é ${parseInt(elemento.dataset.valor)}`);
      exibirInfo(filtrarPelosDias(elemento.dataset.valor));
      janela();
      // console.log(elemento.parentElement.lastElementChild)
        elemento.parentElement.lastElementChild.appendChild(close)
        close.style.display = ""
        click=true
    }
  })
})

function closebutton() {
  // console.log("aaaa")
    click = !click
    check = !check
    click?(close.style.display = ""):close.style.display= "none"
}

function filtrarPelosDias(filtroData) {
  const hoje = new Date();
  return end.filter(dataElemento => ((filtroData) > (Math.floor((hoje - dataElemento.dso) / (24 * 3600 * 1000)))));
}

function filtrarPelosFiltros() {
  let as = document.querySelectorAll('[data-f]')

  as.forEach(el => {
    el.addEventListener
  });
}

// janela();