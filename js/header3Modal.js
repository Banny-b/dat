document.addEventListener("DOMContentLoaded", function () {
    function closeModal(modal) {
        modal.classList.remove("active");
    }

    function setupModal(likeItemLinkClass, modalClass, closeButtonClass) {
        const likeItemLink = document.querySelector(likeItemLinkClass);
        const modal = document.querySelector(modalClass);
        const closeButton = document.querySelector(closeButtonClass);

        likeItemLink.addEventListener("click", function (event) {
            event.preventDefault();
            modal.classList.add("active");
            closeButton.style.display = "block";
        });

        closeButton.addEventListener("click", function () {
            closeModal(modal);
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeModal(modal);
            }
        });
    }

    setupModal(".cart-link-fav", ".favorit-modal", ".basket__close-btn-fav");
    setupModal(".cart-link-comp", ".compare-modal", ".basket__close-btn-comp");
    setupModal(".cart-link", ".cart-modal", ".basket__close-btn");
});
