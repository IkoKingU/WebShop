const body = document.querySelector('.content')
const shop = document.querySelector('.shop')



document.querySelector('.darkBlueLight').addEventListener('mousedown', function (evt) {
    body.style.background = "linear-gradient(0.40turn,#1d2e5d 35%, rgb(0, 183, 255)77%)";
    shop.style.background = "#29407e"
    evt.preventDefault();
});

document.querySelector('.DarkGreenYellow').addEventListener('mousedown', function (evt) {
    body.style.background = "linear-gradient(0.40turn,  #216b3a 35%,rgb(199, 186, 74) 77%)";
    shop.style.background = "#4f7824";
    evt.preventDefault();
});

document.querySelector('.lightBlueDark').addEventListener('mousedown', function (evt) {
    body.style.background = "linear-gradient(0.40turn, #4cfef6 35%,#4a6bc7 77%)";
    shop.style.background = "#24785f";


    evt.preventDefault();
});

document.querySelector('.lightGreen').addEventListener('mousedown', function (evt) {
    body.style.background = "linear-gradient(0.40turn, #4cfeb4 35%,#cfeb54 77%)";
    shop.style.background = "#19abb3";

    evt.preventDefault();
});