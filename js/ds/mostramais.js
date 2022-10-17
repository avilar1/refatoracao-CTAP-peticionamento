
let troca = document.getElementById("troca");
let colapse = document.getElementById("collapseExample");
let botao = document.getElementById("btnMostrarMais");
let pai = document.getElementsByClassName("__mostra-mais-pai")[0];

botao.addEventListener("click", function () {
    setTimeout(function () {
        if (colapse.classList.contains("show")) {
            troca.textContent = "menos";
            pai.style.marginBottom = "0px";
        } else {
            troca.textContent = "mais";
            pai.style.marginBottom = "5%";
        }
    }, 400);
    
});






// let controle = document.getElementById("collapseExample");
// let mostramais = document.getElementById("mostramais");
// let botao = document.getElementById("btnMostrarMais");
// let descricao = document.getElementById("descricaocard");

// let k = 0;

// function mostrar(){
// if(k == 0) {
//     mostramais.style.position = "static";
//     mostramais.style.background = "none";
//     botao.style.position = "relative";
//     descricao.style.maxHeight = "initial";
    
//     k++;
// }
// else {
//     mostramais.style.position = "absolute";
//     mostramais.style.background = "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)";
//     botao.style.position = "absolute";
//     descricao.style.maxHeight = "80px";
//     k=0;
// }
// }