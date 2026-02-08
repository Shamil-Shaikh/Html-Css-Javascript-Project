function filterItems() {
    let input = document.getElementById("search").value.toLowerCase();
    let items = document.querySelectorAll("#list li");

    items.forEach(item => {
        let text = item.textContent.toLowerCase();
        item.style.display = text.includes(input) ? "block" : "none";
    });
}


