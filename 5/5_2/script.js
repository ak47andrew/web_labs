let obj = {
    "Минск": "Беларусь",
    "Москва": "Россия",
    "Киев": "Украина",
}
let keys = ["Минск", "Москва", "Киев"];
keys.forEach(element => {
    console.log(`${element} - это ${obj[element]}`)
});