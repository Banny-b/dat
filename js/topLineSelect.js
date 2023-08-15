document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.querySelector('.hidden-select');
    const selecLink = document.querySelector('.top-line__nav-link.selec');
    
    // При загрузке страницы сразу установим выбор на "plants"
    selectElement.value = 'plants';

    // Открытие/закрытие списка по клику на ссылку
    selecLink.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Если список уже открыт, перейти по ссылке выбранного элемента
        if (selectElement.classList.contains('show')) {
            const selectedOption = selectElement.options[selectElement.selectedIndex];
            const value = selectedOption.value;
            
            switch (value) {
                case 'plants':
                    window.location.href = 'plants.html';
                    break;
                case 'animals':
                    window.location.href = 'animals.html';
                    break;
                case 'birds':
                    window.location.href = 'birds.html';
                    break;
                case 'fish':
                    window.location.href = 'fish.html';
                    break;
                default:
                    break;
            }
        } else {
            selectElement.classList.add('show');
            selectElement.focus();
        }
    });

    // Обработчик изменения выбора в списке
    selectElement.addEventListener('change', function() {
        const selectedOption = this.options[this.selectedIndex];
        const value = selectedOption.value;

        switch (value) {
            case 'plants':
                window.location.href = 'plants.html';
                break;
            case 'animals':
                window.location.href = 'animals.html';
                break;
            case 'birds':
                window.location.href = 'birds.html';
                break;
            case 'fish':
                window.location.href = 'fish.html';
                break;
            default:
                break;
        }
    });

    // Закрытие списка при клике вне элементов
    document.addEventListener('click', function(event) {
        const target = event.target;
        if (!selectElement.contains(target) && !selecLink.contains(target)) {
            selectElement.classList.remove('show');
        }
    });
});
