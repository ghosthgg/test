// Função para mudar o fundo
function changeBackground(url) {
    document.body.style.backgroundImage = "url('" + url + "')";
    
    // Armazenar a URL da imagem no armazenamento local do navegador
    localStorage.setItem('backgroundImage', url);
}

// Verificar se há uma imagem de fundo armazenada localmente ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    const storedBackground = localStorage.getItem('backgroundImage');
    if (storedBackground) {
        document.body.style.backgroundImage = "url('" + storedBackground + "')";
    }
});
