const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add('selecionado');
        
        if (personagens[indice]) {
            personagens[indice].classList.add('selecionado');
        }
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector('.personagem.selecionado');
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove('selecionado');
    }
}

function desselecionarBotao() {
    const botaoselecionado = document.querySelector('.botao.selecionado');
    if (botaoselecionado) {
        botaoselecionado.classList.remove('selecionado');
    }
}
