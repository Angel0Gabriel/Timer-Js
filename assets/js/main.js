
const relogio = document.querySelector('.relogio');
/*const botaoIniciar = document.querySelector('.iniciar');
const botaoPausar = document.querySelector('.pausar');
const botaoZerar = document.querySelector('.zerar');*/
let segundos = 0;
let timer;

document.addEventListener('click', function (event) {
    const elemento = event.target;

    if (elemento.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }

    if (elemento.classList.contains('pausar')) {
        relogio.classList.add('pausado');
        clearInterval(timer);
    }

    if (elemento.classList.contains('zerar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }

});

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++,
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
}

function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

/*botaoIniciar.addEventListener('click', function (event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
});
 
botaoPausar.addEventListener('click', function (event) {
    relogio.classList.add('pausado');
    clearInterval(timer);
});
 
botaoZerar.addEventListener('click', function (event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});*/
