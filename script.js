function moveNao() {
    const buttonNao = document.getElementById("nao");
    const randomX = Math.random() * (window.innerWidth - buttonNao.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - buttonNao.offsetHeight);

    buttonNao.style.position = 'absolute';
    buttonNao.style.left = randomX + 'px';
    buttonNao.style.top = randomY + 'px';
}

function showImage() {
    const imageDiv = document.getElementById("imagem");
    imageDiv.style.display = "block";
    // Substitua o "sua-imagem.jpg" pelo caminho da sua imagem
}
