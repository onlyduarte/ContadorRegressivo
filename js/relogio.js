const diaRestante = document.querySelector('#diaRest')
const ano = document.querySelector('#ano')
const mes = document.querySelector('#mes')
const day = document.querySelector('#dias')

const hr = document.querySelector('#horas')
const min = document.querySelector('#minutos')
const seg = document.querySelector('#segundos')

const tempo = setInterval(function time(){
    let sistema = new Date()
    let anos = sistema.getFullYear()
    let month = sistema.getMonth()
    let dia = sistema.getDate()
    let hora = sistema.getHours()
    let minuto = sistema.getMinutes()
    let segundo = sistema.getSeconds()

    let dataFinal = new Date("1 January 2024") - sistema
    let contDReg = Math.floor(dataFinal/(1000 * 60 * 60 * 24))
    let contMes = Math.floor(dataFinal/(1000 * 60 * 60 * 24)/30)

    if(hora < 10){
        horas = "0"+hora
    }
    if(minuto < 10){
        minuto = "0"+minuto
    }
    if(segundo < 10){
        segundo = "0"+segundo
    }
    if(contMes < 10){
        contMes = "0"+contMes
    }
    ano.textContent = anos
    diaRestante.textContent = contDReg
    // mes.textContent = contMes
    hr.textContent = 23-hora
    min.textContent = 59-minuto
    seg.textContent = 59-segundo
},1000)

