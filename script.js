let index = 0;


function showSlide(i){
    const carrossel = document.querySelector(".carrossel");
    const totalSlides = document.querySelectorAll(".carrossel img").length;
    if(i >= totalSlides) index = 0;
    if(i < 0) index = totalSlides -1;
    carrossel.style.transform = `translateX(-${index * 314}px)`;
}


function nextSlide(){
    index++;
    showSlide(index);
}

function prevSlide(){
    index--;
    showSlide(index);
}


setInterval(nextSlide,5000);
showSlide(index);