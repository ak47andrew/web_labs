function func() {
    const op1 = document.querySelector("#one").value;
    const op2 = document.querySelector("#two").value;
    let out;
    if (op1 == "" || op2 == "") {
        out = "?";
    } else {
        out = Number(op1) + Number(op2);
    }
    document.querySelector("#output").textContent = out;
}