const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

const relogio = () => {
    const data = new Date()
    let hor = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()

    if (hor < 10) hor = '0' + hor
    if (min < 10) min = '0' + min
    if (sec < 10) sec = '0' + sec

    hours.innerHTML = hor
    minutes.innerHTML = min
    seconds.innerHTML = sec

    requestAnimationFrame(relogio)
}

relogio()
