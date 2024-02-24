document.addEventListener("DOMContentLoaded", function () {
    const productImages = document.querySelectorAll(".product-image");

    // Función para activar la animación al pasar el ratón
    function activateMouseOverAnimation() {
        productImages.forEach(productImage => {
            productImage.addEventListener("mouseover", () => {
                productImage.style.transform = "scale(1.2)";
                productImage.style.transition = "transform 0.3s ease";
            });

            productImage.addEventListener("mouseout", () => {
                productImage.style.transform = "scale(1)";
            });
        });
    }

    // Activar las animaciones al cargar completamente la página
    activateMouseOverAnimation();});