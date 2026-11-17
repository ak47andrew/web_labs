const field = document.getElementById("inp");
const echo = document.getElementById("echo");
function f() {
    echo.textContent = field.value;
}
field.addEventListener("input", f)