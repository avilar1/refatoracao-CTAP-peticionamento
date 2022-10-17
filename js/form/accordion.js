let click = false
const accordion = document.querySelector("[data-accordion]")
const checkbox = document.querySelector("#check-terceiros")


accordion.addEventListener('click', (e) => {
    checkbutton() 

})

function checkbutton() {
    
      click = !click
      click?(checkbox.checked = click):checkbox.checked = click
      console.log(click)
  }