const iframeToolGrid = document.getElementById('iframe-tool-grid');
iframeToolGrid.style.display = 'none';

const headerGridIcon = document.getElementById('header-grid-icon');
let headerGridContainer;

iframeToolGrid.addEventListener('load', function() {
    var innerDoc = iframeToolGrid.contentDocument || iframeToolGrid.contentWindow.document;
    headerGridContainer = innerDoc.getElementById('header-grid-container');
});

function toggleGridShow() {
    if (iframeToolGrid.style.display === 'none') {
        iframeToolGrid.style.display = 'block';
        headerGridContainer.scrollTop = 0;
    } else {
        iframeToolGrid.style.display = 'none';
    }
}

window.addEventListener('mouseup', function(event) {
    const clickedElement = event.target;
    // Verifica se o alvo do clique é o headerGrid ou um de seus filhos
    if (clickedElement !== iframeToolGrid && !iframeToolGrid.contains(clickedElement) && clickedElement !== headerGridIcon) {
        iframeToolGrid.style.display = 'none';
    }
});