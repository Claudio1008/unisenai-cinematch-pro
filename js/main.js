// Criação da classe Filme
class Filme {
    constructor(titulo, duracao, capa, youtubeId) {
        this.titulo = titulo;
        this.duracao = Number(duracao);
        this.capa = capa;
        this.youtubeId = youtubeId;
    }
}

// Cálculo usando .reduce() para exibir minutos totais
function renderizarEstatisticas() {
    const catalogo = JSON.parse(localStorage.getItem('cineMatchData')) || [];
    
    // Uso do reduce exigido
    const totalMinutos = catalogo.reduce((acc, filme) => acc + filme.duracao, 0);
    
    const spanMinutos = document.getElementById('minutos-totais');
    if (spanMinutos) {
        spanMinutos.textContent = totalMinutos;
    }
}

// Evento onsubmit para salvar os dados
const formFilme = document.getElementById('form-filme');
if (formFilme) {
    formFilme.onsubmit = (evento) => {
        evento.preventDefault();

        const titulo = document.getElementById('titulo').value;
        const duracao = document.getElementById('duracao').value;
        const capa = document.getElementById('capa').value;
        const youtubeId = document.getElementById('youtubeId').value;

        const novaObra = new Filme(titulo, duracao, capa, youtubeId);

        // Implementação do localStorage
        const catalogo = JSON.parse(localStorage.getItem('cineMatchData')) || [];
        catalogo.push(novaObra);
        localStorage.setItem('cineMatchData', JSON.stringify(catalogo));

        renderizarEstatisticas();
        formFilme.reset();
        alert('Obra adicionada com sucesso ao seu catálogo!');
    };
}

document.addEventListener('DOMContentLoaded', renderizarEstatisticas);