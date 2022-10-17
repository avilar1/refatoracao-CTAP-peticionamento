//função pronta do bootstrap referente a validação. Para mais informações: 
//https://getbootstrap.com/docs/5.0/forms/validation/#custom-styles


(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')
    const alerta = document.querySelector('.invalido')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                    alerta.style.display = ""
                }

                form.classList.add('was-validated')

            }, false)
        }),
        Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener( 'reset',  function (event) {
                form.classList.remove('was-validated')
                alerta.style.display = "none"
            })
        })   
})()
// ,
// (function () {
//     'use strict'

// })