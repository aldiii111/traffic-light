const red = document.getElementById('redLight');
const yellow = document.getElementById('yellowLight');
const green = document.getElementById('greenLight');

const baseLamp = "w-20 h-20 rounded-full ";
const offLamp = baseLamp + "bg-gray-700 ";
const redOn = offLamp + "bg-red-400 ";
const yellowOn = offLamp + "bg-yellow-400 ";
const greenOn = offLamp + "bg-green-400 ";

function turnOff() {
    red.className = offLamp;
    yellow.className = offLamp;
    green.className = offLamp;
}

function turnOn() {
    turnOff();
    red.className = redOn;
    setTimeout(() => {
        turnOff();
        green.className = greenOn;
        setTimeout(() => {
            turnOff();
            yellow.className = yellowOn;
            setTimeout(turnOn, 2000)
        }, 4000)
    }, 5000);
}

turnOn();