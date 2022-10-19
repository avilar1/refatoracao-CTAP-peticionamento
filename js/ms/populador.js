export {exibirInfo, correcaoDasTags, janela};

let info = []
// const end = 'http://localhost:3000/detalhes/';

//quando dado é interno, apenas para testes de front-end
import pop from './../../pop.json' assert {type: 'json'};

const end = pop.detalhes;

//para aparecer no console, visto ser um module. TIRAR EM PRODUÇÃO
window.endPoint = end;




// console.log(end);

const corpo = document.querySelector('#container');
const tbody = document.querySelector('[data-tbody]');
let ncont = 0;

exibirInfo(end); 

//método usando fetch, quando dado é externo. a variável end é o endpoint da API, só mudar ali
// getBuscar();

// async function getBuscar() {
//   const res = await fetch(end);
//   informacoes = await res.json();

//   exibirInfo(informacoes);
// }

function exibirInfo(informacoes) {


  function formatDate(date) {
    return [
      date.getDate(),
      date.getMonth() + 1,
      date.getFullYear(),
    ].join('/');
  }

  let output = '';

  
  informacoes.forEach((informacao, n) => {

    const options = {
      
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    };

    output += `
        <tr class="__card-corpo-desk" id="" data-desk="row">
        <td id="cardI1-desk" data-desk="nso"><a href="#" data-desk="nsoD">${informacao.nso}</a></td>
        <td id="cardI2-desk" data-desk="dso">${formatDate(new Date(informacao.dso))}</td>
        <td id="cardI3-desk" data-desk="srv">${informacao.srv}</td>
        <td id="cardI4-desk" data-desk="org">${informacao.org}</td>
        <td id="cardI5-desk" data-desk="uta">${informacao.uta}</td>
        <td id="cardI6-desk" data-desk="sit"><a href="#" ${situacaoDesk(informacao)} data-desk="sitA" >${informacao.sit}</a></td>
       
      </tr>

        <tr class="" data-linha>
                    <td class="accordion accordion-flush" id="" data-acc="aflush">
                      
                     <div class="accordion-item" id="accordionitem" data-acc="aitem">
                        <h2 class="accordion-header" id="" data-acc="ahone">
                          <button class="accordion-button collapsed" id="accordionbutton" type="button" data-bs-toggle="collapse" data-bs-target="" aria-expanded="false" aria-controls="" data-acc="abutton" data-id="" data-qualacc="">
                            ${informacao.srv}
                            
                          </button>      
                        </h2>
                        
                        <div class="accordion-collapse collapse" aria-labelledby="" data-bs-parent="#accordionFlushExample" data-acc="acone">
                          <div class="accordion-body" id="accordionbody" data-acc="abody">
                            <div class="__card-corpo" id="cardbody" data-acc="acardb" >
                              
                              <div id="cardTi1" data-acc="acardtnso">Número da solicitação </div>             <div id="cardI1" ><a href="#" data-acc="acardinso">${informacao.nso}</a></div>
                              <div id="cardTi2" data-acc="acardtdso">Data da solicitação</div>               <div id="cardI2" data-acc="acardidso">${informacao.dso.toLocaleString()}</div>
                              <div id="cardTi3" data-acc="acardtsrv">Serviço</div>                           <div id="cardI3" data-acc="acardisrv">${informacao.srv}</div>
                              <div id="cardTi4" data-acc="acardtorg">Órgão</div>                             <div id="cardI4" data-acc="acardiorg">${informacao.org}</div>
                              <div id="cardTi5" data-acc="acardtuta">Última atualização</div>                <div id="cardI5" data-acc="acardiuta">${informacao.uta}</div>
                              <div id="cardTi6" data-acc="acardtsit">Situação</div>                          <div id="cardI6"><a href="#" ${situacaoMobileUm(informacao)} data-acc="acardisit" >${informacao.sit}</a></div>
                              <a href="#">Veja mais detalhes</a>
                            </div>
                          </div>
                        </div>
                        <div id="" data-acc="asit" class="__extra-situacao" data-toggle="collapse" data-qualacc="" data-extra style="display:block;"><a data-acc="acardisit" ${situacaoMobileDois(informacao)}>${informacao.sit}</a>  </div>
                      </div>
                    </td>    
                  </tr>
          `;
  });

  tbody.innerHTML = output;
  // if(ncont == 0){
  correcaoDasTags(informacoes.length);
  // }
  
ncont++;
window.ncont = ncont;
  /**ATENÇÃO: essas três funções NÃO SÃO IGUAIS!! */
  function situacaoDesk(informacao) {
    return (informacao.sit == "Indeferida") ? (`class= "btn btn-outline-danger btn-sm __botao-sit" style="pointer-events: none" disabled`) :
      (informacao.sit == "Deferida") ? (`class= "btn btn-outline-success btn-sm __botao-sit" style="pointer-events: none" disabled`) :
        (informacao.sit == "Deferida parcialmente") ? (`class= "btn btn-outline-success __btn-parcialmente btn-sm __botao-sit" style="pointer-events: none" disabled`) :
          (informacao.sit == "Em andamento") ? (`class= "btn btn-outline-primary btn-sm __botao-sit" style="pointer-events: none" disabled`) :

            (informacao.sit == "Cumprir Exigência") ? (`class= "btn btn-success btn-sm __botao-sit __botao-sit-desk" href="cumprirexigencia.html"`) :
              /*não esquecer de adicionar parâmetros que guiarão para onde o link será redirecionado quando for para produção*/

              console.log("nenhum!");
  }
  function situacaoMobileUm(informacao) {
    return (informacao.sit == "Indeferida") ? (`class= "btn btn-outline-danger btn-sm __botao-sit __botao-sit-interno" style="pointer-events: none" disabled`) :
      (informacao.sit == "Deferida") ? (`class= "btn btn-outline-success btn-sm __botao-sit __botao-sit-interno" style="pointer-events: none" disabled`) :
        (informacao.sit == "Deferida parcialmente") ? (`class= "btn btn-outline-success __btn-parcialmente btn-sm __botao-sit __botao-sit-interno" style="pointer-events: none" disabled`) :
          (informacao.sit == "Em andamento") ? (`class= "btn btn-outline-primary btn-sm __botao-sit __botao-sit-interno" style="pointer-events: none" disabled`) :

            (informacao.sit == "Cumprir Exigência") ? (`class= "btn btn-success btn-sm __botao-sit __botao-sit-interno __botao-sit-cumprir" href="cumprirexigencia.html"`) :

              console.log("nenhum!");
  }

  function situacaoMobileDois(informacao) {
    return (informacao.sit == "Indeferida") ? (`class= "btn btn-outline-danger btn-sm __botao-sit" style="pointer-events: none" disabled`) :
      (informacao.sit == "Deferida") ? (`class= "btn btn-outline-success btn-sm __botao-sit" style="pointer-events: none" disabled`) :
        (informacao.sit == "Deferida parcialmente") ? (`class= "btn btn-outline-success __btn-parcialmente btn-sm __botao-sit" style="pointer-events: none" disabled`) :
          (informacao.sit == "Em andamento") ? (`class= "btn btn-outline-primary btn-sm __botao-sit" style="pointer-events: none" disabled`) :

            (informacao.sit == "Cumprir Exigência") ? (`class= "btn btn-outline-success btn-sm __botao-sit" style="pointer-events: none" disabled`) :

              console.log("nenhum Mesmo!");
  }
  
}

function correcaoDasTags(end) {

  console.log(end)
//   const e = pop.detalhes;
// window.e = e;
  let rowDesk = document.querySelectorAll('[data-desk="row"]');
  let ahonePOP = document.querySelectorAll('[data-acc="ahone"]');
  let abuttonPOP = document.querySelectorAll('[data-acc="abutton"]');
  let aconePOP = document.querySelectorAll('[data-acc="acone"]');
  let asit = document.querySelectorAll('[data-acc="asit"]');

  for (let i = 0; i < end; i++) {

    rowDesk[i].id = "cardbody-desk" + i;

    ahonePOP[i].id = 'flush-heading' + i;
    abuttonPOP[i].dataset.bsTarget = '#flush-collapse' + i;
    abuttonPOP[i].setAttribute("aria-controls", 'flush-collapse' + i);
    abuttonPOP[i].dataset.id = i;
    abuttonPOP[i].dataset.qualacc = i;
    abuttonPOP[i].id = 'accordionbutton' + i;
    aconePOP[i].id = 'flush-collapse' + i;
    aconePOP[i].setAttribute("aria-labelledby", 'flush-heading' + i);
    aconePOP[i].ariaLabelledby = 'flush-heading' + i;
    asit[i].id = i;
    asit[i].dataset.qualacc = i;
  }

}

// correcaoDasTags();

function janela() {



const linhas = document.querySelectorAll('[data-linha]');

let controle = 0;
let cont = 0;

function myFunction(x) {
  if (x.matches) { // If media query matches

    if (controle == 0) {
      console.log("desktop")
      let n = 0
      linhas.forEach((elemento) => {
        elemento.hidden = true;
        // aconePOP[n].classList.add("show")
        n++

      })
      controle = 1;
    }

  } else {
    if (controle == 1) {
      console.log("celular")
      let n = 0
      linhas.forEach((element) => {
        element.hidden = false;
        // aconePOP[n].classList.remove("show")
        n++

        document.querySelector("#mostrar").open = false;
        

      })
      controle = 0;
    }
  }

}

var x = window.matchMedia("(min-width: 780px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

}

janela();
correcaoDasTags()