AOS.init();

const dataAniver = new Date("Jun 21, 2024 00:00:00");
const timeStampAniver = dataAniver.getTime();

const contagem = setInterval(function(){
    const agora = new Date();
    const timeStampAgora = agora.getTime();

    const diferenca = timeStampAniver - timeStampAgora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))
    const horas = Math.floor(diferenca % (1000 * 60 * 60 * 24) / (1000* 60 * 60))
    const minutos = Math.floor(diferenca % (1000 * 60 * 60) / (1000 * 60))
    const segundos = Math.floor(diferenca % (1000 * 60) / (1000))

    document.getElementById('timer-days').innerHTML = `${dias}D`
    document.getElementById('timer-hours').innerHTML = `${horas}H`
    document.getElementById('timer-minutes').innerHTML = `${minutos}M`
    document.getElementById('timer-seconds').innerHTML = `${segundos}S`
},1000)