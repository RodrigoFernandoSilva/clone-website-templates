const headerGrid = document.getElementById('header-grid');
const headerGridContainer = document.getElementById('header-grid-container');

headerGrid.style.display = 'none';

function toggleGridShow() {
    if (headerGrid.style.display === 'none') {
        headerGrid.style.display = 'block';
        headerGridContainer.scrollTop = 0;
    } else {
        headerGrid.style.display = 'none';
    }
}

function searchScreen() {
    console.log('Botão clicado!');
    window.location.href = "search.html";
}

window.addEventListener('mouseup', function(event) {
    const clickedElement = event.target;
    // Verifica se o alvo do clique é o headerGrid ou um de seus filhos
    if (clickedElement !== headerGrid && !headerGrid.contains(clickedElement)) {
        headerGrid.style.display = 'none';
    }
});
