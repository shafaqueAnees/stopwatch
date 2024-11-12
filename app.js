var hour = 0;
var min = 0;
var sec = 0;
var milisec = 0;
var Interval

var gethour = document.getElementById('hour');
var getmin = document.getElementById('min');
var getsec = document.getElementById('sec');
var getmilis = document.getElementById('milisec');


function start() {
Interval = setInterval(function () {
    milisec++
    getmilis.innerHTML = milisec

    if (milisec >= 100) {
        sec++
        getsec.innerHTML = sec
        milisec = 0;
    }

    if (sec >= 5) {
        min++
        getmin.innerHTML = min
        sec = 0;
    }

    else if (min >= 5) {
        hour++
        gethour.innerHTML = hour
        min = 0
    }
}, 100)

    document.getElementById('start').disabled = true
}

function stop() {
    clearInterval(Interval)
    document.getElementById('start').disabled = false
}

function reset() {
    var hour = 0;
    var min = 0;
    var sec = 0;
    var milisec = 0;
   
    getmilis.innerHTML = milisec
    getsec.innerHTML = sec
    getmin.innerHTML = min
    gethour.innerHTML = hour
}