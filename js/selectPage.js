const pageSelector = document.getElementById("pageSelector");

    pageSelector.addEventListener("change", () => {
        const selectedValue = pageSelector.value;
        window.location.href = selectedValue;
    });

// ToDo js-код для переключения option
{/* <select id="pageSelector">
    <option value="1.html">Страница 1</option>
    <option value="2.html">Страница 2</option>
</select> */}