/*anotações apenas para recordação, o código é suficientemente limpo para ser entendido sem ela, mas facilita a criação da documentação*/

//pega container
const containerP = document.querySelector('#container')

//população, virá de um consumo de API
const popJSON = 
{
    "detalhes":[
    {"id": "1", 
        "nso": "CID-REQ-2022/1211",
        "dso": "17/12/2022",
        "srv": "Instalação de caçamba",
        "org": "COMLURB",
        "uta": "30/12/2022",
        "sit": "Em andamento"
    },{"id": "2", 
        "nso": "CID-REQ-2022/2874",
        "dso": "22/5/2022",
        "srv": "Remoção de entulho e bens inservíveis",
        "org": "COMLURB",
        "uta": "24/6/2022",
        "sit": "Indeferida"
    },{"id": "3",
        "nso": "CID-REQ-2022/2452",
        "dso": "20/5/2022",
        "srv": "Denunciar obra irregular",
        "org": "SECONSERVA",
        "uta": "22/6/2022",
        "sit": "Indeferida"
    },{"id": "4",
        "nso": "CID-REQ-2022/2014",
        "dso": "07/5/2022",
        "srv": "Autorização para colocação de mesas e cadeiras em área pública",
        "org": "PGM",
        "uta": "22/5/2022",
        "sit": "Deferida parcialmente"
    },{"id": "5",
        "nso": "CID-REQ-0000/0000",
        "dso": "14/5/2022",
        "srv": "Limpeza de praças",
        "org": "COMLURB",
        "uta": "20/5/2022",
        "sit": "Deferida"
    },{"id": "6",
        "nso": "CID-REQ-2022/1458",
        "dso": "4/5/2022",
        "srv": "Cópia de plantas de imóveis",
        "org": "SMDEIS",
        "uta": "17/5/2022",
        "sit": "Cumprir Exigência"
    },{"id": "7",
        "nso": "CID-REQ-2022/1258",
        "dso": "30/4/2022",
        "srv": "Fiscalização de obras",
        "org": "RIOURBE",
        "uta": "16/5/2022",
        "sit": "Indeferida"
    },{"id": "8",
        "nso": "CID-REQ-2022/1254",
        "dso": "20/4/2022",
        "srv": "Instalação de quebra - molas",
        "org": "CET-RIO",
        "uta": "10/5/2022",
        "sit": "Indeferida"
    },{"id": "9",
        "nso": "CID-REQ-2022/1232",
        "dso": "10/4/2022",
        "srv": "Rever cálculo de IPTU",
        "org": "SMFP",
        "uta": "25/4/2022",
        "sit": "Cumprir Exigência"
      },{"id": "10",
        "nso": "CID-REQ-2022/1234",
        "dso": "3/4/2022",
        "srv": "Reparo de buraco",
        "org": "CET-RIO",
        "uta": "20/4/2022",
        "sit": "Deferida"
      }
]}


//modelo de card
const modelo = `
  <tr class="card " data-linha>
              <td class="accordion accordion-flush" id="accordionFlushExample" data-acc="aflush">
                <div class="accordion-item" id="accordionitem" data-acc="aitem">
                  <h2 class="accordion-header" id="" data-acc="ahone">
                    <button class="accordion-button collapsed" id="accordionbutton" type="button" data-bs-toggle="collapse" data-bs-target="" aria-expanded="false" aria-controls="" data-acc="abutton" data-id="" data-qualacc="">
                      Modelo que não deveria aparecer
                      
                    </button>      
                  </h2>
                  
                  <div class="accordion-collapse collapse" aria-labelledby="" data-bs-parent="#accordionFlushExample" data-acc="acone">
                    <div class="accordion-body" id="accordionbody" data-acc="abody">
                      <div class="__card-corpo" id="cardbody" data-acc="acardb" >
                        
                        <div id="cardTi1" data-acc="acardtnso">Número da solicitação </div>             <div id="cardI1" ><a href="#" data-acc="acardinso"></a></div>
                        <div id="cardTi2" data-acc="acardtdso">Data da solicitação</div>               <div id="cardI2" data-acc="acardidso"></div>
                        <div id="cardTi3" data-acc="acardtsrv">Serviço</div>                           <div id="cardI3" data-acc="acardisrv"></div>
                        <div id="cardTi4" data-acc="acardtorg">Órgão</div>                             <div id="cardI4" data-acc="acardiorg"></div>
                        <div id="cardTi5" data-acc="acardtuta">Última atualização</div>                <div id="cardI5" data-acc="acardiuta"></div>
                        <div id="cardTi6" data-acc="acardtsit">Situação</div>                          <div id="cardI6"><a href="#" data-acc="acardisit" ></a></div>
                        <a href="#">Veja mais detalhes</a>
                      </div>
                    </div>
                  </div>
                  <div id="" data-acc="asit" class="__extra-situacao" data-toggle="collapse" data-qualacc="" data-extra style="display: block;"><a data-acc="acardisit"></a>  </div>
                </div>
              </td>    
            </tr>
    `;

//se for preciso
let sJSON = JSON.stringify(popJSON)
let listaJSON = JSON.parse(sJSON);

//insere o título para começar
containerP.innerHTML = `
<table id="container">
          <thead class="card">
            <tr class=" __card-corpo-titulo" data-corpo="linhacorpo">

              <th id="cardT1" class="nselected" data-t="1">Número da solicitação</th>
              <th id="cardT2" class="nselected" data-t="2">Data da solicitação</th>
              <th id="cardT3" class="nselected" data-t="3">Serviço</th>
              <th id="cardT4" class="nselected" data-t="4">Órgão</th>
              <th id="cardT5" class="nselected" data-t="5">Última atualização</th>
              <th id="cardT6" class="nselected" data-t="6">Situação</th>

            </tr>
          </thead>
    <tbody id="modelo" data-tbody>
    </tbody>
</table>
`

//pega tabela
const tbody = document.querySelector('[data-tbody]')
let novaL; /*cria variável que receberá nova linha*/
let novaC; /*cria variável que receberá novo card*/
let linhas = []; /*cria array que receberá as linhas*/
let cards = []; /*cria array que receberá os cards*/

let v = 0; /*variável de controle linhas*/
let vc = 0; /*variável de controle cards*/
let w = []; /*cria array que receberá os dados e será usado para linhas.*/
let wc = []; /*cria array que receberá os dados e será usado para cards. Ué, não poderia ser o mesmo?*/

let myMap = new Map(Object.entries(popJSON.detalhes)); /*map com os dados populados*/

let e = popJSON.detalhes; /*simplifica tamanho*/

/*cria array na array, para que tenha duas dimensões*/
for( var i=0; i<e.length; i++ ) {
    w.push( [] );
    wc.push( [] );
  }

/*para cada dado irá popular o vetor de duas dimensão, ambos*/
popJSON.detalhes.forEach(e => {

    /*se existir detalhes, cria o elemento e adiciona ao html*/
    if(popJSON.detalhes) {
        novaL = criaLinhaDesk();
        tbody.appendChild(novaL);

        novaC = criaLinhaMobile();
        tbody.appendChild(novaC);
            /*alimenta as arrays de linhas e cards que serão usados no html*/
    linhas.push(novaL);
    cards.push(novaC);
    }



    /*alimenta os arrays bimensionais*/
    w[v].push((myMap.get(`${v}`).nso));
    w[v].push((myMap.get(`${v}`).dso));
    w[v].push((myMap.get(`${v}`).srv));
    w[v].push((myMap.get(`${v}`).org));
    w[v].push((myMap.get(`${v}`).uta));
    w[v].push((myMap.get(`${v}`).sit));

    wc[v].push((myMap.get(`${v}`).nso));
    wc[v].push((myMap.get(`${v}`).dso));
    wc[v].push((myMap.get(`${v}`).srv));
    wc[v].push((myMap.get(`${v}`).org));
    wc[v].push((myMap.get(`${v}`).uta));
    wc[v].push((myMap.get(`${v}`).sit));

v++

});



let r=0 /*variável de controle*/
/*pra cara uma das linhas, acrescentar as células com as informações devidas que estão na array*/
linhas.forEach(element => {
    /*são 6 colunas, então roda 6 vezes*/
    for (let i = 1; i <= 6; i++) {
        let tdPOP = document.createElement("td");

        /*se for a primeira coluna, adiciona um link*/
        if(i==1){
            let atdPOP = document.createElement("a");
            tdPOP.id = `cardI${i}-desk`;
            tdPOP.appendChild(atdPOP);
            atdPOP.setAttribute("href", "#");
            atdPOP.dataset.desk = "nsoD";
            atdPOP.innerHTML = w[r][i-1]; /**como começou com 1, só tirou um número para bater com a array */
            element.appendChild(tdPOP);
        }/**se for a última, adiciona um link, diferente do primeiro */
        else if(i==6) {
            let atdPOP = document.createElement("a");
            tdPOP.id = `cardI${i}-desk`;
            tdPOP.appendChild(atdPOP);
            atdPOP.setAttribute("href", "#");
            atdPOP.dataset.desk = "sitA";
            atdPOP.innerHTML = w[r][i-1];
            element.appendChild(tdPOP);
        }/**não sendo nenhuma dessas, não adiciona link */
        else {
            tdPOP.id = `cardI${i}-desk`;
            tdPOP.innerHTML = w[r][i-1];
            element.appendChild(tdPOP);
        }
        /**switch e case nesse caso porque a variável 1 é certa*/
        switch (i) {
        case 1:
            tdPOP.dataset.desk = "nso";
            break;
        case 2:
            tdPOP.dataset.desk = "dso";
            break;
        case 3:
            tdPOP.dataset.desk = "srv";
            break;
        case 4:
            tdPOP.dataset.desk = "org";
            break;
        case 5:
            tdPOP.dataset.desk = "uta";
            break;
        case 6:
            tdPOP.dataset.desk = "sit";
            break;
        }
    }

    /**só usado outro tipo de condicional, o ternário. Nesse caso, muda o botão/pastilha de situação de acordo com o seu status*/
    let situacao = document.querySelectorAll(`[data-desk="sitA"]`);
    let statusPOP = (w[r][5] == "Indeferida") ? (situacao[r].classList.add("btn", "btn-outline-danger", "btn-sm", "__botao-sit"), situacao[r].style.pointerEvents="none", situacao[r].setAttribute("disabled", "disabled")) :
    (w[r][5] == "Deferida") ? (situacao[r].classList.add("btn", "btn-outline-success", "btn-sm", "__botao-sit"), situacao[r].style.pointerEvents="none", situacao[r].setAttribute("disabled", "disabled") ) :
        (w[r][5] == "Deferida parcialmente") ? (situacao[r].classList.add("btn", "btn-outline-success", "__btn-parcialmente", "btn-sm", "__botao-sit"), situacao[r].style.pointerEvents="none", situacao[r].setAttribute("disabled", "disabled") ) :    
            (w[r][5] == "Em andamento") ?(situacao[r].classList.add("btn", "btn-outline-primary", "btn-sm", "__botao-sit"), situacao[r].style.pointerEvents="none", situacao[r].setAttribute("disabled", "disabled")) :

            (w[r][5] == "Cumprir Exigência") ? (situacao[r].classList.add("btn", "btn-success", "btn-sm", "__botao-sit", "__botao-sit-desk"), situacao[r].href = "cumprirexigencia.html"): 
            /*não esquecer de adicionar parâmetros aqui*/
            console.log("nenhum!");

    r++;

});


/**só adiciona o modelo de cards ao html. como cards só é alimentado se tiver elementos, não existindo nenhum o card é vazio e a função não funciona */
cards.forEach(element => {
    element.classList.add("card")
    element.innerHTML = modelo;
});


let s = 0; /**variável de controle para realinhar ids e datasets do accordion, pois influenciam no funcionamento*/
for (let i = 0; i < e.length; i++) {

let d = pegaTag();

d.rowDesk[i].id= "cardbody-desk" + i;

d.abuttonPOP[i].textContent = i;


d.ahonePOP[s].id = 'flush-heading' + s;
d.abuttonPOP[s].dataset.bsTarget = '#flush-collapse' + s;
d.abuttonPOP[s].setAttribute("aria-controls", 'flush-collapse' + s);
d.abuttonPOP[s].dataset.id = s;
d.abuttonPOP[s].dataset.qualacc = s;
d.abuttonPOP[s].id = 'accordionbutton' + s;
d.aconePOP[s].id = 'flush-collapse' + s;
d.aconePOP[s].setAttribute("aria-labelledby", 'flush-heading' + s);
d.aconePOP[s].ariaLabelledby = 'flush-heading' + s;
d.asit[s].id = s;
d.asit[s].dataset.qualacc = s;
  s++
}

let m = 0; /**variável de controle para população dos cards */
let k = 0; /**variável de controle para situação. como são sempre 3, ela pula de dois em dois e um deles soma, chegando ao terceiro*/


cards.forEach((element) => {

    let d = pegaTag();
    
    /**alimenta os elementos com a pouplação na array bidimensional */
    d.abuttonPOP[m].textContent = wc[m][2];
    d.acardinso[m].textContent = wc[m][0];
    d.acardisrv[m].textContent = wc[m][2];
    d.acardidso[m].textContent = wc[m][1];
    d.acardiorg[m].textContent = wc[m][3];
    d.acardiuta[m].textContent = wc[m][4];
    
    /**apesar da semelhança, as condicionais não são iguais e referem-se a diferentes pastilhas/botões*/
    let sit =       (wc[m][5] == "Indeferida") ? (d.acardisit[k].classList.add("btn", "btn-outline-danger", "btn-sm", "__botao-sit", "__botao-sit-interno"), d.acardisit[k].style.pointerEvents="none", d.acardisit[k].setAttribute("disabled", "disabled")) :
                    (wc[m][5] == "Deferida") ? (d.acardisit[k].classList.add("btn", "btn-outline-success", "btn-sm", "__botao-sit", "__botao-sit-interno"), d.acardisit[k].style.pointerEvents="none", d.acardisit[k].setAttribute("disabled", "disabled") ) :
                        (wc[m][5] == "Deferida parcialmente") ? (d.acardisit[k].classList.add("btn", "btn-outline-success", "__btn-parcialmente", "btn-sm", "__botao-sit", "__botao-sit-interno"), d.acardisit[k].style.pointerEvents="none", d.acardisit[k].setAttribute("disabled", "disabled") ) :    
                            (wc[m][5] == "Em andamento") ?(d.acardisit[k].classList.add("btn", "btn-outline-primary", "btn-sm", "__botao-sit", "__botao-sit-interno"), d.acardisit[k].style.pointerEvents="none", d.acardisit[k].setAttribute("disabled", "disabled")) : 
        
                            (wc[m][5] == "Cumprir Exigência") ? (d.acardisit[k].classList.add("btn", "btn-success", "btn-sm", "__botao-sit", "__botao-sit-cumprir", "__botao-sit-interno"), d.acardisit[k].href = "cumprirexigencia.html") :   
                        
                            console.log("nenhum!");
                
    let sit2 =      (wc[m][5] == "Indeferida") ? (d.acardisit[k+1].classList.add("btn", "btn-outline-danger", "btn-sm", "__botao-sit"), d.acardisit[k+1].style.pointerEvents="none", d.acardisit[k+1].setAttribute("disabled", "disabled")) :
                    (wc[m][5] == "Deferida") ? (d.acardisit[k+1].classList.add("btn", "btn-outline-success", "btn-sm", "__botao-sit"), d.acardisit[k+1].style.pointerEvents="none", d.acardisit[k+1].setAttribute("disabled", "disabled") ) :
                        (wc[m][5] == "Deferida parcialmente") ? (d.acardisit[k+1].classList.add("btn", "btn-outline-success", "__btn-parcialmente", "btn-sm", "__botao-sit"), d.acardisit[k+1].style.pointerEvents="none", d.acardisit[k+1].setAttribute("disabled", "disabled") ) :
                            (wc[m][5] == "Em andamento") ?(d.acardisit[k+1].classList.add("btn", "btn-outline-primary", "btn-sm", "__botao-sit"), d.acardisit[k+1].style.pointerEvents="none", d.acardisit[k+1].setAttribute("disabled", "disabled")) :
                        
                            (wc[m][5] == "Cumprir Exigência") ? (d.acardisit[k+1].classList.add("btn", "btn-outline-success", "btn-sm", "__botao-sit"), d.acardisit[k+1].style.pointerEvents="none", d.acardisit[k+1].setAttribute("disabled", "disabled")):  
                            console.log("nenhum Mesmo!");
    
    /**por fim, alimenta-se a pastilha com conteúdo */
    d.acardisit[k].textContent = wc[m][5];
    d.acardisit[k+1].textContent = wc[m][5];
    k = k+2;
    m++;
})

/**como era necessário correr duas vezes o documento, o código se repetia. Na primeira vez, não há dado, na segunda há. Como preicsa se repetir, então foi feita uma função */
function pegaTag() {

    let rowDesk = document.querySelectorAll('[data-desk="row"]');
    let aflushPOP = document.querySelectorAll('[data-acc="aflush"]');
    let aitemPOP = document.querySelectorAll('[data-acc="aitem"]');
    let ahonePOP = document.querySelectorAll('[data-acc="ahone"]');
    let abuttonPOP = document.querySelectorAll('[data-acc="abutton"]');
    let aconePOP = document.querySelectorAll('[data-acc="acone"]');
    let abodyPOP = document.querySelectorAll('[data-acc="abody"]');
    let acardbPOP = document.querySelectorAll('[data-acc="acardb"]');
    let asit = document.querySelectorAll('[data-acc="asit"]');
    
    const acardinso = document.querySelectorAll('[data-acc="acardinso"]');
    const acardidso = document.querySelectorAll('[data-acc="acardidso"]');
    const acardisrv = document.querySelectorAll('[data-acc="acardisrv"]');
    const acardiorg = document.querySelectorAll('[data-acc="acardiorg"]');
    const acardiuta = document.querySelectorAll('[data-acc="acardiuta"]');
    const acardisit = document.querySelectorAll('[data-acc="acardisit"]');

    
    return  {rowDesk, aflushPOP, aitemPOP, ahonePOP, abuttonPOP, aconePOP, abodyPOP, acardbPOP, asit, acardinso, acardidso, acardisrv, acardiorg, acardiuta, acardisit};
}

/**cria tr para linhas de desktop */
function criaLinhaDesk() {
    let novaLinha = document.createElement("tr");
    novaLinha.classList.add("__card-corpo-desk");
    novaLinha.id = "cardbody-desk";
    novaLinha.dataset.desk = "row";

    return novaLinha;
}

/**cria tr para cards do mobile */
function criaLinhaMobile() {
  let novoCard = document.createElement("tr");
  novoCard.dataset.linha = "";

  return novoCard;
}

/**função para controle da responsividade. Apesar de não ser de fato necessária, facilita. Além disso, controla a abertura ou fechamento dos cards no mobile. */
let controle = 0;
let cont = 0;

function myFunction(x) {
    if (x.matches) { // If media query matches
      
      if (controle == 0) {
        console.log("desktop")
        let n = 0
        cards.forEach((elemento) => {
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
        cards.forEach((element) => {
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