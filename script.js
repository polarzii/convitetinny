const envelope = document.getElementById('envelope');
const pag1 = document.getElementById('pag-1');
const pag2 = document.getElementById('pag-2');
const btnContinuar = document.getElementById('btn-continuar');

// 1. Abre o envelope
envelope.addEventListener('click', () => {
    envelope.classList.add('open');
});

// 2. Vai direto para a Página 3 (final) ao clicar no botão ou na página
function irParaFinal() {
    pag1.classList.add('esconder');
    pag2.classList.add('esconder');
}

btnContinuar.addEventListener('click', (e) => {
    e.stopPropagation();
    irParaFinal();
});

pag1.addEventListener('click', irParaFinal);
pag2.addEventListener('click', irParaFinal);
