function carregarVideoteca() {
    const gridCatalogo = document.getElementById('grid-catalogo');
    const catalogo = JSON.parse(localStorage.getItem('cineMatchData')) || [];

    if (!gridCatalogo) return;

    if (catalogo.length === 0) {
        gridCatalogo.innerHTML = '<p>Sua videoteca está vazia.</p>';
        return;
    }

    gridCatalogo.innerHTML = '';

    // Uso do forEach para renderização dinâmica
    catalogo.forEach(filme => {
        // Injetando article class="card" no HTML
        const article = document.createElement('article');
        article.className = 'card';

        article.innerHTML = `
            <img src="${filme.capa}" alt="Pôster da obra ${filme.titulo}" class="card-img">
            <div class="card-content">
                <h3 title="${filme.titulo}">${filme.titulo}</h3>
                <p><strong>Duração:</strong> ${filme.duracao} min</p>
                <div class="trailer-container">
                    <iframe 
                        src="https://www.youtube.com/embed/${filme.youtubeId}" 
                        title="Trailer de ${filme.titulo}"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        `;

        gridCatalogo.appendChild(article);
    });
}

document.addEventListener('DOMContentLoaded', carregarVideoteca);