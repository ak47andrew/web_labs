// Pos: 
// - 150, 50
// - 150, 150
// - 150, 250
//
// Aka index => 150, 100 * index + 50
// let id = 0;
let elements = [
    document.getElementById("ufo"),
    document.getElementById("asteriod"),
    document.getElementById("spaceship"),
]

function update_pos() {
    // Rotate the things
    elements = [...elements.slice(1), elements[0]];

    // Update based on the index in the array
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.style.top = "150px";
        element.style.left = `${100 * index + 50}px`;
    }

    console.log("Updated");
}

let is_button_running = false;

document.getElementsByTagName("button")[0].addEventListener("click", (event) => {
    // So stale intervals won't fuck around and cause all sorts of crazy-ass bugs
    // if some idiot decides to click the button again
    // if (obj_interval != undefined) {
    //     clearInterval(obj_interval);
    // }
    // if (button_interval != undefined) {
    //     clearInterval(button_interval);
    // }
    // Upd: Actually let's just ignore it if it's clicked more then one time.
    // It just makes more sense since button jumps to the startpos on click and this looks meh
    if (is_button_running) {
        return;
    }
    is_button_running = true;

    // Some "global" vars
    const button = event.target;
    let x = 220; let y = 350;
    let spd_x = 1; let spd_y = 1;
    const x_offset_left = 0; const y_offset_left = 0;
    const x_max = 520; const y_max = 380;

    // Change to absolute coords so we can work in the second setInterval easier
    button.style.top = "0px";
    button.style.left = "0px";

    setInterval(() => {
        update_pos();
        // console.log(id);
        // id += 1;
    }, 1000);

    // Can I have a little fun please? :3
    setInterval(() => {
        function update_pos() {
            button.style.transform = `translate(${x}px, ${y}px)`;
        }

        x += spd_x;
        if (x > x_max) {
            x = x_max;
            spd_x = -spd_x;
        } else if (x < x_offset_left) {
            x = x_offset_left;
            spd_x = -spd_x;
        }
        y += spd_y;
        if (y > y_max) {
            y = y_max;
            spd_y = -spd_y;
        } else if (y < y_offset_left) {
            y = y_offset_left;
            spd_y = -spd_y;
        }
        update_pos();
    }, 10);
})