//let click = false
const accordion = document.querySelector("[data-accordion]");
const checkbox = document.querySelector("[data-accordion]").childNodes[1].childNodes[1];
const nomeCompletodoInteressado = document.querySelector('.accordion-body').childNodes[1].childNodes[3];
const cpfdoInteressado = document.querySelector('.accordion-body').childNodes[3].childNodes[3];

accordion.disabled = true;


checkbox.addEventListener('change', function() {
  if (this.checked) {
    accordion.disabled = false;

    nomeCompletodoInteressado.required = true;
    cpfdoInteressado.required = true;

  } else {
    accordion.disabled = true;
    nomeCompletodoInteressado.required = false;
    cpfdoInteressado.required = false;
  }
})