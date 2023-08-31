document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector('.image-gallery');
    const boxes = document.querySelectorAll('.gallery-box');
    let currentIndex = 0;

    boxes.forEach((box, index) => {
        box.addEventListener('mouseover', () => {
            box.style.transform = 'scale(1.2)'; // Zoom sur l'article au passage de la souris
            box.style.opacity = 1; // Rétablit l'opacité totale au passage de la souris
        });

        box.addEventListener('mouseout', () => {
            box.style.transform = 'scale(1)'; // Rétablir la taille normale lorsque la souris quitte l'article
            box.style.opacity = 0.5; // Appliquer l'opacité réduite après la sortie de la souris
        });
    });


    function updateGalleryPosition() {
        const translateX = -currentIndex * 100;
        boxes.forEach((box, index) => {
            const offset = index - currentIndex;
            const xOffset = offset * 110; // Ajustez la valeur d'espacement ici
            box.style.transform = `translateX(calc(${translateX}% + ${xOffset}px))`;
            box.style.opacity = 0.5; // Appliquer l'opacité réduite pour toutes les images
        });
        boxes[currentIndex].style.opacity = 1; // Rétablit l'opacité totale pour l'image sélectionnée
    }
});