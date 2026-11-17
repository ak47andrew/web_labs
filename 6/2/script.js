function func() {
    const objs = document.querySelectorAll(".pr");
    for (let index = 0; index < objs.length; index++) {
        const element = objs[index];
        element.textContent = index;
    }
}