function tocaSom (idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
}