function changeBackground(value) {
    if (value.startsWith('http')) {
        // Se o valor começar com "http", é considerado uma URL
        document.body.style.backgroundImage = `url('${value}')`;
    } else {
        // Caso contrário, assume-se que é uma classe CSS
        document.body.className = '';
        document.body.classList.add(value);
    }
}

async function changeBackground(value) {
    if (value === 'random') {
        // Se o valor for 'random', chama a função para mudar para uma imagem aleatória
        await changeBackgroundRandom();
    } else if (value.startsWith('http')) {
        // Se o valor começar com "http", é considerado uma URL
        document.body.style.backgroundImage = `url('${value}')`;
    } else {
        // Caso contrário, assume-se que é uma classe CSS
        document.body.className = '';
        document.body.classList.add(value);
    }
}

async function changeBackgroundRandom() {
    const imageUrls = await getRandomImages();
    const randomUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
    document.body.style.backgroundImage = `url('${randomUrl}')`;
}

async function getRandomImages() {
    const response = await fetch('https://api.unsplash.com/photos/random?count=1&client_id=YOUR_ACCESS_KEY');
    const data = await response.json();
    return data.map(photo => photo.urls.small);
}

// Atualizar o background da página com uma imagem aleatória quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    changeBackground('random');
});


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


// Função para mudar o fundo por URL inserido pelo usuário
function changeBackgroundByUrl() {
    const imageUrl = document.getElementById('imageUrl').value;
    changeBackground(imageUrl);
}