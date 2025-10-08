const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const data = document.getElementById('data')

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();
    let dia = dateToday.getDate();
    let mes = dateToday.getMonth() + 1;
    let ano = dateToday.getFullYear();
    
    horas.textContent = hr.toString().padStart(2, '0');
    minutos.textContent = min.toString().padStart(2, '0');
    segundos.textContent = seg.toString().padStart(2, '0');
    data.textContent = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano.toString().padStart(2, '0')}`;
    
}, 1000)