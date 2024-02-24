document.addEventListener("DOMContentLoaded", function () {
    const recommendations = document.querySelectorAll(".recommendation");

    // Función para activar las animaciones
    function activateAnimations() {
        recommendations.forEach((recommendation, index) => {
            setTimeout(() => {
                recommendation.style.opacity = "1";
                recommendation.style.transform = "translateY(0)";
            }, index * 100); // Ajusta el tiempo de retardo según tus preferencias
        });
    }

    // Activar las animaciones cuando la página se carga completamente
    activateAnimations();
});