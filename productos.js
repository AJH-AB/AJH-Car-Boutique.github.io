// script.js
function toggleCards(category) {
    // Ocultar todas las cards
    const allCardContainers = document.querySelectorAll('.card-container');
    allCardContainers.forEach(container => container.style.display = 'none');

    // Mostrar las cards del botón presionado
    const selectedCards = document.querySelector(`.${category}`);
    if (selectedCards) {
        selectedCards.style.display = 'flex';  // Mostrar en flex para alineación
    }
}

// Mostrar solo las cards universales al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    toggleCards('universales');
});
