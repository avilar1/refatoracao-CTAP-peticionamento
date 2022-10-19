//para converter a data no formato atual em um que seja possível fazer calculo, use:

import { exibirInfo, correcaoDasTags, janela } from './populador.js';
export {diferencaData, arrayData, end}

let data = "22/09/2022"
var dateParts = data.split("/");

// month is 0-based, that's why we need dataParts[1] - 1
var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);

let dataNova = dateObject.toString();
window.dataNova = dataNova;



import pop from './../../pop.json' assert {type: 'json'};

const end = pop.detalhes;
let arrayData = [];
let ordenadasDatas = [];

end.forEach(element => {
    let ndata = element.dso
    var ndateParts = ndata.split("/");

    var ndateObject = new Date(+ndateParts[2], ndateParts[1] - 1, +ndateParts[0]);
    

    let nuta = element.dso
    let partes = nuta.split("/");

    let dataFinal = new Date(+partes[2], partes[1] - 1, +partes[0]);

    arrayData.push(dataFinal);

    element.dso = dataFinal;


});

const date = new Date();
let newDate = new Date();


function diferencaData() {
    arrayData.forEach(e => {

        ordenadasDatas.push(Math.floor((date - e) / (24 * 3600 * 1000)));
    });
    
    return ordenadasDatas;
    
}

diferencaData();

function ordenarPorUltimaAtualizacao(objeto) {
    let JsonOrdenado = objeto.sort((a, b) => b.dso - a.dso);
    return JsonOrdenado;
}


let ordenado = ordenarPorUltimaAtualizacao(end);


exibirInfo(ordenado);
correcaoDasTags();
janela();


