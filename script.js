let index = 0;

function showSlide(i) {
    const carrossel = document.querySelector(".carrossel");
    const slides = document.querySelectorAll(".carrossel img");
    const totalSlides = slides.length;
    const slideWidth = carrossel.clientWidth; // Ajusta o tamanho da imagem conforme a largura do carrossel

    if (i >= totalSlides) index = 0;
    if (i < 0) index = totalSlides - 1;

    // Ajusta o movimento para o tamanho correto da imagem
    carrossel.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
    index++;
    showSlide(index);
}

function prevSlide() {
    index--;
    showSlide(index);
}

// Ajusta o carrossel a cada 5 segundos
setInterval(nextSlide, 5000);

// Ajusta o carrossel na inicialização
showSlide(index);

// Atualiza o carrossel quando a janela for redimensionada
window.addEventListener("resize", function() {
    showSlide(index); // Recalcula a posição dos slides com base na nova largura
});
