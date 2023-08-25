// Code with smooth animation
document.addEventListener("DOMContentLoaded", function () {
    const likeItemLink = document.querySelector(".cart-link");
    const modal = document.querySelector(".cart-modal");
    const closeButton = document.querySelector(".basket__close-btn");

    likeItemLink.addEventListener("click", function (event) {
        event.preventDefault();
        modal.classList.add("active");
        closeButton.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        modal.classList.remove("active");
    });
});

// Code without animation
// document.addEventListener("DOMContentLoaded", function () {
//     const likeItemLink = document.querySelector(".cart-link");
//     const modal = document.getElementById("cart-mod");
//     const closeButton = document.querySelector(".basket__close-btn");

//     likeItemLink.addEventListener("click", function (event) {
//         event.preventDefault();
//         modal.style.display = "block";
//         closeButton.style.display = "block";
//     });

//     closeButton.addEventListener("click", function () {
//         modal.style.display = "none";
//         closeButton.style.display = "none";
//     });
// });