document.addEventListener('DOMContentLoaded', function () {
    const quantityDisplay = document.getElementById('quantity-display');
    const increaseButton = document.querySelector('[data-action="increase"]');
    const decreaseButton = document.querySelector('[data-action="decrease"]');
    
    let currentQuantity = 1;
    
    increaseButton.addEventListener('click', () => {
        currentQuantity++;
        updateQuantityDisplay();
    });
    
    decreaseButton.addEventListener('click', () => {
        if (currentQuantity > 1) {
            currentQuantity--;
            updateQuantityDisplay();
        }
    });
    
    function updateQuantityDisplay() {
        quantityDisplay.textContent = currentQuantity.toString();
    }
});