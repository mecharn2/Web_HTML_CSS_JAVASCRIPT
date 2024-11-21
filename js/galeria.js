let indice = 1;

mostrarSlider(indice);

function pasarImagen(valor){
    mostrarSlider(indice + valor)
}

function mostrarSlider(pass){

    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if(pass > slides.length){
        indice = 1
    }else if(pass < 1){
        indice = slides.length
    }else{
        indice = pass
    }
    if(indice < 1){
        indice = slides.length
    }
    for(i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i=0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[indice - 1].style.display = "block";
    dots[indice - 1].className += " active";
}
 
