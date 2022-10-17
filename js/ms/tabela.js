
let titulos = document.querySelectorAll('[data-t]');
let tx = 3;

if(localStorage.getItem('txLocal') == null) {
    localStorage.setItem('txLocal', '3');
  }


titulos.forEach(element => {
    // console.log(element.textContent) 

    if (element.dataset.t == localStorage.getItem('txLocal')){
        element.classList.remove('nselected')
      }

    element.addEventListener('click', (ev) => {
        if (element.dataset.t != localStorage.getItem('txLocal')) {
            element.classList.toggle('nselected');
        }else{
            element.classList.toggle('nrotate');
        }
        localStorage.setItem('txLocal', element.dataset.t);
        tx = element.dataset.t;
        // console.log(tx);
        titulos.forEach(titulo => {
            if (titulo.dataset.t != localStorage.getItem('txLocal')) {
                if(!titulo.classList.contains('nselected')){
                    titulo.classList.toggle('nselected');
                }               
            }
        })
      });
});

//você que está vendo esse código, com certeza conhece um jeito melhor de fazer isso que fiz. Sinta-se a vontade para corrigir o código.
//única coisa que ele faz é tirar os elementos que não são os que você clicou.