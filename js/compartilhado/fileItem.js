
//percorra os arquivos com file.files
//atualizar a lista de aquivos aceitos no html, usando o atributo accept. Atualmente ele está apenas como exemplo
//os arquivos usados devem ser do arrayFiles, visto que, por definição, a API file do JS é readOnly. Ou seja, não é possível a exclusão. Na array é possível

let file = document.querySelector('[data-file="bfile"]')
// let bodyRow = document.querySelector('[data-file="grupo"]')
let Row = document.querySelector('[data-file="row"]')
const arrayFiles = []
let k = 0

file.addEventListener('input', (e) => {
    for (var i = 0; i < file.files.length; ++i) {


        // if (file.files[i] == 'text/plain') {
            arrayFiles.push(file.files.item(i))
            let name = file.files.item(i).name;
            console.log("here is a file name: " + name);

            let divRow = document.createElement("tr");
            let divRowD = document.createElement("td");
            let spanInputg = document.createElement("span");
            let closeD = document.createElement("button");
            let divg = document.createElement("td");
            let text = document.createElement("input");
            let close = document.createElement("button");

            divRow.classList.add("__row")
            divRow.setAttribute("data-control", k)

            divRowD.classList.add("__row-descricao")

            spanInputg.classList.add("__el-comum-arq")

            closeD.classList.add("__close-line")
            closeD.setAttribute("ariaLabel", "close")
            closeD.setAttribute("onclick", "remove(this.parentElement.parentElement)")

            divg.classList.add("__input-grupo")

            text.classList.add("form-control", "__input")
            text.id = "file-item-descricao" + [i]
            text.value = ""
            text.setAttribute("placeholder", "descreva o documento")

            close.classList.add("__close-inline")
            close.setAttribute("ariaLabel", "close")
            close.setAttribute("onclick", "remove(this.parentElement.parentElement)")

            Row.appendChild(divRow)
            divRow.appendChild(divRowD)
            divRowD.appendChild(spanInputg)
            divRowD.appendChild(closeD)
            divRow.appendChild(divg)
            divg.appendChild(text)
            divg.appendChild(close)

            spanInputg.textContent = name
            k++
        // } else {
        //     window.alert("arquivo invalido")
        // }
    }
})
function remove(el) {
    let element = el;
    let kpai = element.dataset.control
    arrayFiles.splice(kpai, 1, "")
    element.remove();
  }