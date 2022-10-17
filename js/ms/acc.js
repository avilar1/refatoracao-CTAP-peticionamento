

let accbody = document.querySelectorAll('[data-extra]');
let accbutton = document.querySelectorAll('[data-acc="abutton"]');

let click2 = true
let check2 = true

accbutton.forEach(element => {
    
  element.addEventListener('click', (ev) => {
    
    accbody.forEach(item => {

      if (item.dataset.qualacc == element.dataset.qualacc) {
        
        if (item.style.display == 'block') {
          item.style.display = 'none';
        }else {
          item.style.display = 'block';
        }
        
      }else {
        if (item.style.display == 'block') {
          item.style.display = 'block';
        }else {
          item.style.display = 'none';
        }
      }

    })
  })
});
