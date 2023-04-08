const num = [...document.querySelectorAll('.num')]
const op = [...document.querySelectorAll('.op')]
const limpar = document.querySelector('.limpar')
const igual = document.querySelector('.igual')
const display = document.querySelector('.display')
let control = false

limpar.addEventListener('click', () => {
    display.innerHTML = 0
})

num.map((n) => {
    n.addEventListener('click', () => {
        if (display.innerHTML == 0) {
            display.innerHTML = ''
        }

        if (control == true) {
            control = false
        }

        display.innerHTML += n.innerHTML
    })
})

op.map((op) => {
    op.addEventListener('click', () => {
        if (display.innerHTML == 0) {
            display.innerHTML = ''
        }
   
        if (control == false) {
            if (op.innerHTML == 'x') {
                display.innerHTML += '*'
            } else {
                display.innerHTML += op.innerHTML
                control = true
            }
        }

    })
})

igual.addEventListener('click', () => {
    display.innerHTML = eval(display.innerHTML)
})
