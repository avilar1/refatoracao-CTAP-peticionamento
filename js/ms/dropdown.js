let itens = document.querySelectorAll('.dropdown-item')
let selecione = document.querySelector('#selecione')

let mx = 1;

// localStorage.setItem('mxLocal', '1');

if(localStorage.getItem('mxLocal') == null) {
  localStorage.setItem('mxLocal', '1');
}

itens.forEach(element => {

  if (element.dataset.m == localStorage.getItem('mxLocal')){
    element.classList.add('dropdown-item-selecionado')

  }

  element.addEventListener('click', (ev) => {
   

    if (element.dataset.m != localStorage.getItem('mxLocal')) {
      element.classList.toggle('dropdown-item-selecionado');
    } else {
      element.classList.toggle('dropdown-item-rotate');
    }
    localStorage.setItem('mxLocal', element.dataset.m);
    mx = element.dataset.m;
    // selecione.text = element.textContent;
    itens.forEach(item => {
      if (item.dataset.m != localStorage.getItem('mxLocal')) {
        if (item.classList.contains('dropdown-item-selecionado')) {
          item.classList.toggle('dropdown-item-selecionado');
        }
      }
    })
  })
})
