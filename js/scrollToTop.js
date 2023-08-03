const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

const topButton = document.querySelector(".top-btn");
topButton.addEventListener("click", scrollToTop);