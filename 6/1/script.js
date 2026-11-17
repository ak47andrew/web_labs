const rows = document.querySelectorAll("tr")
for (let index = 0; index < rows.length; index++) {
    const element = rows[index];
    element.children[index].style.backgroundColor = "yellow";
}