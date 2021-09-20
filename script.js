var horas = document.getElementById("horas");
var minutos = document.getElementById("minutos");
var segundos = document.getElementById("segundos");

var relogio = setInterval(
    function time() {
        var date_now = new Date();
        var hr = date_now.getHours();
        var min = date_now.getMinutes();
        var sec = date_now.getSeconds();

        if (hr < 10) {
            hr = "0" + hr;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }

        horas.textContent = hr;
        minutos.textContent = min;
        segundos.textContent = sec;



    }, 1000
)