// Rotating arrow code
document.addEventListener("DOMContentLoaded", function() {
    const dropbtn = document.querySelector(".dropbtn");
    const dropbtnarr = document.querySelector(".dropbtnarr"); // Adding a variable for the arrow
    const dropdownContent = document.querySelector(".dropdown-content");

    dropbtn.addEventListener("click", function() {
    dropdownContent.classList.toggle("show");
    dropbtnarr.classList.toggle("rotate"); // Switch class for arrow rotation
    });
});


// Code without rotating arrow
// document.addEventListener("DOMContentLoaded", function() {
//     const dropbtn = document.querySelector(".dropbtn");
//     const dropdownContent = document.querySelector(".dropdown-content");

//     dropbtn.addEventListener("click", function() {
//         dropdownContent.classList.toggle("show");
//     });
// });