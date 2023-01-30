//recomenda-se usar o mmapDeFilesExtras, um map com key, para pegar os files que não sejam igual a "" (!==). Usar um foreach para usar o método get [map.get(key, value)] para pegar os valores. Já os obrigatórios estão no filesObrigatorios, uma array.

let file = document.querySelector('[data-file="addfile"]');
let corpoFiles = document.querySelector('[data-file="listafile"]');
let extras = document.querySelectorAll('[data-extralinha]');

let arquivos = document.querySelectorAll('[data-file="bfile"]');
let arquivosExtra = document.querySelectorAll('[data-extra="extra"]');

let spannome = document.querySelectorAll('[data-spannome]');
let spandsize = document.querySelectorAll('[data-spandsize]');

let spannomen = document.querySelectorAll('[data-spannomen]');
let spandsizen = document.querySelectorAll('[data-spandsizen]');

const filesExtras = [];
const filesObrigatorios = [];

const mmapDeFilesExtras = new Map();

arquivos.forEach(arquiv => {
  filesObrigatorios.push('');
});

let control = 0;

function addLinha() {


  file.addEventListener('click', () => {
    let extras = document.querySelectorAll('[data-extralinha]');

    if (extras.length > 0) {
      console.log("como já existe, foi feito apenas uma cópia")
      control++;

      let novo = extras[extras.length - 1].cloneNode(true);

      novo.dataset.extralinha = "0" + control;
      novo.dataset.control = control;
      corpoFiles.appendChild(novo);

      novo.childNodes[1].childNodes[3].childNodes[1].textContent = 'Nenhum arquivo selecionado'
      novo.childNodes[1].childNodes[3].childNodes[3].childNodes[1].textContent = ''
      novo.childNodes[1].childNodes[1].value = '';
      chamaGuardaNovos();

    } else {
      console.log("não há linha de extras, então será criado uma");
      const conteudo =
        `<tr class="__row __row-arquivos __row-arquivos-extra" data-extralinha="0" data-control="0">
                    <td class="__row-input">
                        <input type="text" class="form-control __input" id="file-item-descricao" value="" placeholder="Escreva aqui a descrição do arquivo">
                        <div>
                            <span class="__input-desc" data-spannomen="0">Nenhum arquivo selecionado</span>
                            <div>
                            <span class="__input-desc" data-spandsizen="0""></span>
                            <button type="button" class="__close-inline __close-inline-mobile" aria-label="Close"
                            data-file="closeB" onclick="remove(this.parentElement.parentElement.parentElement.parentElement)"></button>
                        </div>
                        </div>
                    </td>
                    <td class="__row-botao">
                    <label class="btn btn-outline-success btn-file __button-file" id="labelbotom"
                            for="arquivon0">
                            <svg width="19" height="20" viewBox="0 0 19 19" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="__icon-file">
                                <path
                                    d="M5.34375 3.5625C5.34375 2.77514 5.65653 2.02003 6.21328 1.46328C6.77003 0.906528 7.52514 0.59375 8.3125 0.59375C9.09986 0.59375 9.85497 0.906528 10.4117 1.46328C10.9685 2.02003 11.2812 2.77514 11.2812 3.5625V14.25C11.2812 14.7224 11.0936 15.1755 10.7595 15.5095C10.4255 15.8436 9.97242 16.0312 9.5 16.0312C9.02758 16.0312 8.57452 15.8436 8.24047 15.5095C7.90642 15.1755 7.71875 14.7224 7.71875 14.25V5.9375C7.71875 5.78003 7.78131 5.629 7.89266 5.51766C8.00401 5.40631 8.15503 5.34375 8.3125 5.34375C8.46997 5.34375 8.62099 5.40631 8.73234 5.51766C8.84369 5.629 8.90625 5.78003 8.90625 5.9375V14.25C8.90625 14.4075 8.96881 14.5585 9.08016 14.6698C9.19151 14.7812 9.34253 14.8438 9.5 14.8438C9.65747 14.8438 9.8085 14.7812 9.91985 14.6698C10.0312 14.5585 10.0938 14.4075 10.0938 14.25V3.5625C10.0938 3.32858 10.0477 3.09696 9.95816 2.88085C9.86864 2.66473 9.73744 2.46837 9.57203 2.30297C9.40663 2.13756 9.21027 2.00636 8.99415 1.91684C8.77804 1.82732 8.54642 1.78125 8.3125 1.78125C8.07858 1.78125 7.84696 1.82732 7.63085 1.91684C7.41473 2.00636 7.21837 2.13756 7.05297 2.30297C6.88756 2.46837 6.75636 2.66473 6.66684 2.88085C6.57732 3.09696 6.53125 3.32858 6.53125 3.5625V14.25C6.53125 15.0374 6.84403 15.7925 7.40078 16.3492C7.95753 16.906 8.71264 17.2188 9.5 17.2188C10.2874 17.2188 11.0425 16.906 11.5992 16.3492C12.156 15.7925 12.4688 15.0374 12.4688 14.25V5.9375C12.4688 5.78003 12.5313 5.629 12.6427 5.51766C12.754 5.40631 12.905 5.34375 13.0625 5.34375C13.22 5.34375 13.371 5.40631 13.4823 5.51766C13.5937 5.629 13.6562 5.78003 13.6562 5.9375V14.25C13.6562 15.3523 13.2184 16.4095 12.4389 17.1889C11.6595 17.9684 10.6023 18.4062 9.5 18.4062C8.39769 18.4062 7.34054 17.9684 6.56109 17.1889C5.78164 16.4095 5.34375 15.3523 5.34375 14.25V3.5625Z"
                                    class="__path-icon" />
                            </svg>
                            <span class="__el-button" id="spanfile">SELECIONE O ARQUIVO</span></label>
                            <input type="file" name="arquivon0" id="arquivon0" data-extra="extra" data-qualn="0" accept=".pdf, .txt">
                            <button type="button" class="__close-inline" aria-label="Close"
                            data-file="closeB" onclick="remove(this.parentElement.parentElement)"></button>
                    </td>
                </tr>`
      corpoFiles.innerHTML += conteudo;
      // arquivosExtra = document.querySelectorAll('[data-extra="extra"]');
      // extras = document.querySelectorAll('[data-extralinha]');
      // reamudar(extras);
    }

    extra();
  })
}

addLinha();
chamaGuardaNovos();

arquivos.forEach(arquiv => {
  arquiv.addEventListener('change', (e) => {
    for (let i = 0; i < arquiv.files.length; i++) {
      const qual = arquiv.dataset.qual;
      console.log(qual);
      filesObrigatorios.splice(qual - 1, 1, arquiv.files[0]);
      // filesObrigatorios[qual-1] = arquiv.files[0];
      // filesObrigatorios.push(arquiv.files[0]);
      let name = arquiv.files.item(0).name;
      let size = arquiv.files.item(0).size;
      /**ADICIONAR CONTROLE DE TAMANHO AQUI */
      console.log("obrigatorio: " + name);

      spannome.forEach(span => {
        if (span.dataset.spannome === qual) {
          span.textContent = name;
        }
      });
      spandsize.forEach(span => {
        if (span.dataset.spandsize === qual) {
          //span.textContent = (size/1024).toFixed(2) + " KB" ;
          span.textContent = returnFileSize(size);
        }
      });
    }
    //   console.log(arquiv.dataset.qual); 
  })
});



function chamaGuardaNovos() {
  arquivosExtra = document.querySelectorAll('[data-extra="extra"]');
  arquivosExtra.forEach(arq => {
    arq.addEventListener('change', (e) => {
      for (let i = 0; i < arq.files.length; i++) {
        const qualn = arq.dataset.qualn;
        console.log(qualn);
        mmapDeFilesExtras.set(qualn, arq.files[0])
        filesExtras.splice(qualn - 1, 1, arq.files[0]);
        // filesObrigatorios[qualn-1] = arq.files[0];
        // filesObrigatorios.push(arq.files[0]);
        let name = arq.files.item(0).name;
        let size = arq.files.item(0).size;
        /**ADICIONAR CONTROLE DE TAMANHO AQUI */
        console.log("extra: " + name);

        spannomen = document.querySelectorAll('[data-spannomen]');
        spandsizen = document.querySelectorAll('[data-spandsizen]');

        spannomen.forEach(span => {
          if (span.dataset.spannomen === qualn) {
            span.textContent = name;
          }
        });
        spandsizen.forEach(span => {
          if (span.dataset.spandsizen === qualn) {
            // span.textContent = (size / 1024).toFixed(2) + " KB";
            span.textContent = returnFileSize(size);
          }
        });
      }
    });

  });
}

function remove(el) {
  // let element = el;
  let kpai = el.dataset.control
  filesExtras.splice(kpai, 1, "")
  mmapDeFilesExtras.set(kpai, '')
  el.remove();
  control--;
  extras = document.querySelectorAll('[data-extralinha]');
  reamudar(extras);
}

function returnFileSize(number) {
  if (number < 1024) {
    return `${number} bytes`;
  } else if (number >= 1024 && number < 1048576) {
    return `${(number / 1024).toFixed(1)} KB`;
  } else if (number >= 1048576) {
    return `${(number / 1048576).toFixed(1)} MB`;
  }
}

function reamudar(extras) {
  if (extras.length > 0) {

    let i = 0;
    extras.forEach(extra => {
      extra.childNodes[1].childNodes[3].childNodes[1].dataset.spannomen = i;
      extra.childNodes[1].childNodes[3].childNodes[3].childNodes[1].dataset.spandsizen = i;
      extra.childNodes[3].childNodes[3].dataset.qualn = i;
      extra.childNodes[3].childNodes[3].name = "arquivon" + i;
      extra.childNodes[3].childNodes[3].id = "arquivon" + i;
      extra.childNodes[3].childNodes[1].setAttribute("for", "arquivon" + i);
      i++;
    });
  }
}

function extra() {

  arquivosExtra = document.querySelectorAll('[data-extra="extra"]');
  extras = document.querySelectorAll('[data-extralinha]');
  spannome = document.querySelectorAll('[data-spannome]');
  spandsize = document.querySelectorAll('[data-spandsize]');
  reamudar(extras);
  if (control < 0) {
    control = 0;
  }
  console.log(extras[control].childNodes[1].childNodes[3].childNodes[1]);

}