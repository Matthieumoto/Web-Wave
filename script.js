document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector('.image-gallery');
    const boxes = document.querySelectorAll('.gallery-box');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    let currentIndex = 0;

    updateArrows(); // Appel initial pour désactiver les flèches si nécessaire

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + boxes.length) % boxes.length;
        updateGalleryPosition();
        updateArrows(); // Mise à jour des flèches après le changement d'image
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % boxes.length;
        updateGalleryPosition();
        updateArrows(); // Mise à jour des flèches après le changement d'image
    });

    function updateArrows() {
        if (currentIndex === 0) {
            leftArrow.style.pointerEvents = 'none'; // Désactiver la flèche gauche à la première image
        } else {
            leftArrow.style.pointerEvents = 'auto'; // Activer la flèche gauche pour les autres images
        }

        if (currentIndex === boxes.length - 1) {
            rightArrow.style.pointerEvents = 'none'; // Désactiver la flèche droite à la dernière image
        } else {
            rightArrow.style.pointerEvents = 'auto'; // Activer la flèche droite pour les autres images
        }
    }

    function updateGalleryPosition() {
        const translateX = -currentIndex * 100;
        boxes.forEach((box, index) => {
            const offset = index - currentIndex;
            const xOffset = offset * 110; // Ajustez la valeur d'espacement ici
            box.style.transform = `translateX(calc(${translateX}% + ${xOffset}px))`;
            if (index !== currentIndex) {
                box.style.opacity = 0.5; // Réduit l'opacité pour les images non sélectionnées
            } else {
                box.style.opacity = 1; // Rétablit l'opacité pour l'image sélectionnée
            }
        });
    }
});