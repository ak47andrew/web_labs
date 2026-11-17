function update_text(value) {
    document.getElementById("pb_text").textContent = `${value}%`
}
update_text(0)

function func(event) {
    const pb = document.getElementById("pb");
    if (pb.value == 100) {
        return;
    }
    update_text(pb.value + 1);
    pb.value += 1;
}