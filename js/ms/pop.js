
let container = document.querySelector('#container')
let linhaPOP = document.querySelectorAll('[data-linha]')

const tbody = document.querySelector('[data-tbody]')

let aflushPOP = document.querySelectorAll('[data-acc="aflush"]')
let aitemPOP = document.querySelectorAll('[data-acc="aitem"]')
let ahonePOP = document.querySelectorAll('[data-acc="ahone"]')
let abuttonPOP = document.querySelectorAll('[data-acc="abutton"]')
let aconePOP = document.querySelectorAll('[data-acc="acone"]')
let abodyPOP = document.querySelectorAll('[data-acc="abody"]')

let acardbPOP = document.querySelectorAll('[data-acc="acardb"]')
let asit = document.querySelectorAll('[data-acc="asit"]')


let rowDesk = document.querySelectorAll('[data-desk="row"]')
let numeroDaSolicitacao = document.querySelectorAll('[data-desk="nso"]')
let linkNumeroDaSolicitacao = document.querySelectorAll('[data-desk="nsoD"]')
let dataDaSolicitacao = document.querySelectorAll('[data-desk="dso"]')
let servico = document.querySelectorAll('[data-desk="srv"]')
let orgao = document.querySelectorAll('[data-desk="org"]')
let ultimaAtualizacao = document.querySelectorAll('[data-desk="uta"]')
let situacao = document.querySelectorAll('[data-desk="sit"]')
let situacaoLink = document.querySelectorAll('[data-desk="sitA"]')

let control = 0


//pop na verdade é apenas um objeto nesse exemplo, nem JSON é. Caso for usá-lo, recomendável criar um array de objetos ou adaptar o código;

/*
alterar em todos os locais que aparecem as seguites variáveis de acordo com os atributo do back (se for usar como objeto):

nso-> número da solicitação
dso-> data da solicitação
srv-> descrição do serviço
org-> orgão
uta-> última atualização
sit-> situação
*/

const pop = 
{
    "1": {
        "nso": "CID-REQ-2022/1211",
        "dso": "17/12/2022",
        "srv": "Instalação de caçamba",
        "org": "COMLURB",
        "uta": "30/12/2022",
        "sit": "Em andamento"
    },

    "2": {
        "nso": "CID-REQ-2022/2874",
        "dso": "22/5/2022",
        "srv": "Remoção de entulho e bens inservíveis",
        "org": "COMLURB",
        "uta": "24/6/2022",
        "sit": "Indeferida"
    },
    "3": {
        "nso": "CID-REQ-2022/2452",
        "dso": "20/5/2022",
        "srv": "Denunciar obra irregular",
        "org": "SECONSERVA",
        "uta": "22/6/2022",
        "sit": "Indeferida"
    },
    "4": {
        "nso": "CID-REQ-2022/2014",
        "dso": "07/5/2022",
        "srv": "Autorização para colocação de mesas e cadeiras em área pública",
        "org": "PGM",
        "uta": "22/5/2022",
        "sit": "Deferida parcialmente"
    },
    "5": {
        "nso": "CID-REQ-0000/0000",
        "dso": "14/5/2022",
        "srv": "Limpeza de praças",
        "org": "COMLURB",
        "uta": "20/5/2022",
        "sit": "Deferida"
    },
    "6": {
        "nso": "CID-REQ-2022/1458",
        "dso": "4/5/2022",
        "srv": "Cópia de plantas de imóveis",
        "org": "SMDEIS",
        "uta": "17/5/2022",
        "sit": "Cumprir Exigência"
    },
    "7": {
        "nso": "CID-REQ-2022/1258",
        "dso": "30/4/2022",
        "srv": "Fiscalização de obras",
        "org": "RIOURBE",
        "uta": "16/5/2022",
        "sit": "Indeferida"
    },
    "8": {
        "nso": "CID-REQ-2022/1254",
        "dso": "20/4/2022",
        "srv": "Instalação de quebra - molas",
        "org": "CET-RIO",
        "uta": "10/5/2022",
        "sit": "Indeferida"
    },
    "9": {
        "nso": "CID-REQ-2022/1232",
        "dso": "10/4/2022",
        "srv": "Rever cálculo de IPTU",
        "org": "SMFP",
        "uta": "25/4/2022",
        "sit": "Cumprir Exigência"
      },
    "10": {
        "nso": "CID-REQ-2022/1234",
        "dso": "3/4/2022",
        "srv": "Reparo de buraco",
        "org": "CET-RIO",
        "uta": "20/4/2022",
        "sit": "Deferida"
      }
}

// const popJSON = JSON.stringify(pop); <-se for necessário, passa o objeto para JSON


tbody.appendChild(rowDesk[0])
rowDesk[0].appendChild(numeroDaSolicitacao[0])
numeroDaSolicitacao[0].appendChild(linkNumeroDaSolicitacao[0])
rowDesk[0].appendChild(dataDaSolicitacao[0])
rowDesk[0].appendChild(servico[0])
rowDesk[0].appendChild(orgao[0])
rowDesk[0].appendChild(ultimaAtualizacao[0])
rowDesk[0].appendChild(situacao[0])
situacao[0].appendChild(situacaoLink[0])





container.appendChild(linhaPOP[0])
linhaPOP[0].appendChild(aflushPOP[0])
aflushPOP[0].appendChild(aitemPOP[0])
aitemPOP[0].appendChild(ahonePOP[0])
aitemPOP[0].appendChild(abuttonPOP[0])
// aitemPOP[0].appendChild(asit[0])
aflushPOP[0].appendChild(aconePOP[0])
aflushPOP[0].appendChild(asit[0])
aconePOP[0].appendChild(abodyPOP[0])
abodyPOP[0].appendChild(acardbPOP[0])

tamanho = Object.keys(pop).length;

for (let i = 0; i < tamanho; i++) {
    linhaPOP = document.querySelectorAll('[data-linha]')
    abuttonPOP = document.querySelectorAll('[data-acc="abutton"]')
    // console.log(linhaPOP[i])
    linhaPOP[i].insertAdjacentElement("afterend", linhaPOP[i].cloneNode(true))
    abuttonPOP[i].textContent = i

    rowDesk = document.querySelectorAll('[data-desk="row"]')
    rowDesk[i].insertAdjacentElement("afterend", rowDesk[i].cloneNode(true))
    rowDesk[i].id= "cardbody-desk" + i
}


//titulos não mudam, só linha

const acardinso = document.querySelectorAll('[data-acc="acardinso"]')
const acardidso = document.querySelectorAll('[data-acc="acardidso"]')
const acardisrv = document.querySelectorAll('[data-acc="acardisrv"]')
const acardiorg = document.querySelectorAll('[data-acc="acardiorg"]')
const acardiuta = document.querySelectorAll('[data-acc="acardiuta"]')
const acardisit = document.querySelectorAll('[data-acc="acardisit"]')



numeroDaSolicitacao = document.querySelectorAll('[data-desk="nso"]')
linkNumeroDaSolicitacao = document.querySelectorAll('[data-desk="nsoD"]')
dataDaSolicitacao = document.querySelectorAll('[data-desk="dso"]')
servico = document.querySelectorAll('[data-desk="srv"]')
orgao = document.querySelectorAll('[data-desk="org"]')
ultimaAtualizacao = document.querySelectorAll('[data-desk="uta"]')
situacao = document.querySelectorAll('[data-desk="sitA"]')



let n = 0;
let k = 0;



//veja que ele pega as propriedades do pop, pegando os valores de cada um pelo seu nome (propriedades do objeto). Logo, os nomes "srv, nso, dso..." todos devem ser alterados para o título dos atributos da JSON que pop recebeu.
for (var prop in pop) {
    abuttonPOP[n].textContent = pop[prop].srv
    acardinso[n].textContent = pop[prop].nso
    acardisrv[n].textContent = pop[prop].srv
    acardidso[n].textContent = pop[prop].dso
    acardiorg[n].textContent = pop[prop].org
    acardiuta[n].textContent = pop[prop].uta




    linkNumeroDaSolicitacao[n].textContent =  pop[prop].nso
    dataDaSolicitacao[n].textContent =        pop[prop].dso
    servico[n].textContent =                  pop[prop].srv
    orgao[n].textContent =                    pop[prop].org
    ultimaAtualizacao[n].textContent =        pop[prop].uta
    situacao[n].textContent =                 pop[prop].sit

let situacaoC = (pop[prop].sit == "Indeferida") ? (situacao[n].classList.add("btn", "btn-outline-danger", "btn-sm", "__botao-sit"), situacao[n].style.pointerEvents="none", situacao[n].setAttribute("disabled", "disabled")) :
                    (pop[prop].sit == "Deferida") ? (situacao[n].classList.add("btn", "btn-outline-success", "btn-sm", "__botao-sit"), situacao[n].style.pointerEvents="none", situacao[n].setAttribute("disabled", "disabled") ) :
                        (pop[prop].sit == "Deferida parcialmente") ? (situacao[n].classList.add("btn", "btn-outline-success", "__btn-parcialmente", "btn-sm", "__botao-sit"), situacao[n].style.pointerEvents="none", situacao[n].setAttribute("disabled", "disabled") ) :    
                            (pop[prop].sit == "Em andamento") ?(situacao[n].classList.add("btn", "btn-outline-primary", "btn-sm", "__botao-sit"), situacao[n].style.pointerEvents="none", situacao[n].setAttribute("disabled", "disabled")) :
                
                            (pop[prop].sit == "Cumprir Exigência") ? (situacao[n].classList.add("btn", "btn-success", "btn-sm", "__botao-sit", "__botao-sit-desk"), situacao[n].href = "cumprirexigencia.html"): 
                            /*não esquecer de adicionar parâmetros aqui*/
                            console.log("nenhum!");


let sit =       (pop[prop].sit == "Indeferida") ? (acardisit[k].classList.add("btn", "btn-outline-danger", "btn-sm", "__botao-sit", "__botao-sit-interno"), acardisit[k].style.pointerEvents="none", acardisit[k].setAttribute("disabled", "disabled")) :
                    (pop[prop].sit == "Deferida") ? (acardisit[k].classList.add("btn", "btn-outline-success", "btn-sm", "__botao-sit", "__botao-sit-interno"), acardisit[k].style.pointerEvents="none", acardisit[k].setAttribute("disabled", "disabled") ) :
                        (pop[prop].sit == "Deferida parcialmente") ? (acardisit[k].classList.add("btn", "btn-outline-success", "__btn-parcialmente", "btn-sm", "__botao-sit", "__botao-sit-interno"), acardisit[k].style.pointerEvents="none", acardisit[k].setAttribute("disabled", "disabled") ) :    
                            (pop[prop].sit == "Em andamento") ?(acardisit[k].classList.add("btn", "btn-outline-primary", "btn-sm", "__botao-sit", "__botao-sit-interno"), acardisit[k].style.pointerEvents="none", acardisit[k].setAttribute("disabled", "disabled")) : 
        
                            (pop[prop].sit == "Cumprir Exigência") ? (acardisit[k].classList.add("btn", "btn-success", "btn-sm", "__botao-sit", "__botao-sit-cumprir", "__botao-sit-interno"), acardisit[k].href = "cumprirexigencia.html") :   
                        
                            console.log("nenhum!");
                
let sit2 =      (pop[prop].sit == "Indeferida") ? (acardisit[k+1].classList.add("btn", "btn-outline-danger", "btn-sm", "__botao-sit"), acardisit[k+1].style.pointerEvents="none", acardisit[k+1].setAttribute("disabled", "disabled")) :
                    (pop[prop].sit == "Deferida") ? (acardisit[k+1].classList.add("btn", "btn-outline-success", "btn-sm", "__botao-sit"), acardisit[k+1].style.pointerEvents="none", acardisit[k+1].setAttribute("disabled", "disabled") ) :
                        (pop[prop].sit == "Deferida parcialmente") ? (acardisit[k+1].classList.add("btn", "btn-outline-success", "__btn-parcialmente", "btn-sm", "__botao-sit"), acardisit[k+1].style.pointerEvents="none", acardisit[k+1].setAttribute("disabled", "disabled") ) :
                            (pop[prop].sit == "Em andamento") ?(acardisit[k+1].classList.add("btn", "btn-outline-primary", "btn-sm", "__botao-sit"), acardisit[k+1].style.pointerEvents="none", acardisit[k+1].setAttribute("disabled", "disabled")) :
                        
                            (pop[prop].sit == "Cumprir Exigência") ? (acardisit[k+1].classList.add("btn", "btn-outline-success", "btn-sm", "__botao-sit"), acardisit[k+1].style.pointerEvents="none", acardisit[k+1].setAttribute("disabled", "disabled")):  
                            console.log("nenhum Mesmo!");

    acardisit[k].textContent = pop[prop].sit
    acardisit[k+1].textContent = pop[prop].sit
    k = k+2
    n++

}



const linha = document.querySelectorAll('[data-linha]')

aflushPOP = document.querySelectorAll('[data-acc="aflush"]')
aitemPOP = document.querySelectorAll('[data-acc="aitem"]')
ahonePOP = document.querySelectorAll('[data-acc="ahone"]')
abuttonPOP = document.querySelectorAll('[data-acc="abutton"]')
aconePOP = document.querySelectorAll('[data-acc="acone"]')
abodyPOP = document.querySelectorAll('[data-acc="abody"]')

acardbPOP = document.querySelectorAll('[data-acc="acardb"]')

asit = document.querySelectorAll('[data-acc="asit"]')

let m = 0;
linha.forEach((element) => {
  tbody.appendChild(element);
  //$([aitemD])[0][0].dataset.acc='aa' //modelo
  ahonePOP[m].id = 'flush-heading' + m;
  abuttonPOP[m].dataset.bsTarget = '#flush-collapse' + m;
  abuttonPOP[m].setAttribute("aria-controls", 'flush-collapse' + m);
  abuttonPOP[m].dataset.id = m;
  abuttonPOP[m].dataset.qualacc = m;
  abuttonPOP[m].id = 'accordionbutton' + m;
  aconePOP[m].id = 'flush-collapse' + m;
  aconePOP[m].setAttribute("aria-labelledby", 'flush-heading' + m);
  aconePOP[m].ariaLabelledby = 'flush-heading' + m;
  asit[m].id = m;
  asit[m].dataset.qualacc = m;
  m++


})

//Como usei um modelo dentro do próprio html, após adicionar todas informações que preciso nos corretos, é necessário eliminar o modelo. É por isso que o modelo não aparece no html final.
//usando um framework, isso não seria necessário. Mas, como observado, o resultado é satisfatório.
linha[tamanho].remove();
document.querySelectorAll('[data-desk="row"]')[tamanho].remove();

let controle = 0;
let cont = 0;

function myFunction(x) {
    if (x.matches) { // If media query matches
      
      if (controle == 0) {
        console.log("desktop")
        let n = 0
        linha.forEach((elemento) => {
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
        linha.forEach((element) => {
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