const iniciar = document.querySelector('.iniciar')
const alarme = document.querySelector('audio')

iniciar.addEventListener('click', (evt) => {
    const hours = document.querySelector('#hours')
    const minutes = document.querySelector('#minutes')
    const seconds = document.querySelector('#seconds')

    let duracao = (parseInt(hours.value) * 60 * 60) + (parseInt(minutes.value) * 60) + parseInt(seconds.value)

    const display = document.querySelector('.display')
    timer(duracao, display)

})

const timer = (duracao, display) => {
    let timer = duracao
    let horas, minutos, segundos
    
    let tempo = setInterval(() => {
        horas = Math.floor(timer / 60 / 60)
        minutos = Math.floor(timer / 60) - (horas * 60)
        segundos = Math.floor(timer % 60)

        horas = horas < 10 ? '0' + horas : horas
        minutos = minutos < 10 ? '0' + minutos : minutos
        segundos = segundos < 10 ? '0' + segundos : segundos

        display.innerHTML = `${horas}:${minutos}:${segundos}`
        timer --

        if (timer < 0) {
            alarme.play()
            clearInterval(tempo)
        }
    }, 1000)
}
