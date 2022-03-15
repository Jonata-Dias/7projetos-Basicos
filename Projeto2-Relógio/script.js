































/*
let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s'); //ponteiro de segundos
let mElement = document.querySelector('.p_m');//ponteiro de minutos
let hElement = document.querySelector('.p_h');//ponteiro de horas

function updateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`

    let sDeg = ((360 / 60) * second)-90; // calculo de graus dos segundos no analogico
    let mDeg = ((360 / 60) * minute)-90; // 
    let hDeg = ((360 / 12) * hour)-90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero(time){ // forma resumida: da funçao fixzero
    if(time < 10) {     // returm time < 10 ? `0${time}` : time;
        return "0"+ time;
    } else {
        return time;
    }
}

setInterval(updateClock, 1000);
updateClock(); // para não ter delay de 1 segundo  no relogio quando abrir o site
 */