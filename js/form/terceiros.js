
const accordionT = document.querySelector("[data-accordion]")
let checkTerceiros = document.querySelector('#check-terceiros')
let nomeCompletoInteressado = document.querySelector('#nomeCompletoInteressado')
let cpfInteressado = document.querySelector('#cpfInteressado')

accordionT.addEventListener('click', () => {
    check()
})



function check () {
    if (checkTerceiros.checked == true){
        nomeCompletoInteressado.setAttribute('required', '')
        cpfInteressado.setAttribute('required', '')
        console.log('sim')
    }
    else{
        if(nomeCompletoInteressado.hasAttribute('required', '')){
            nomeCompletoInteressado.removeAttribute('required', '') 
        }
        if(cpfInteressado.hasAttribute('required', '')) {
            cpfInteressado.removeAttribute('required', '') 
        }
        console.log('não')
    }
}
