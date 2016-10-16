function resetta() {
    var i;
    var campo = document.getElementById("griglia");
    if (campo) {
        var figli = campo.childNodes;
        for (i = figli.length - 1; i >= 0; i--) {
            campo.removeChild(figli[i]);
        }
        var zg = document.getElementById("zonagioco");
        if (zg) {
            var figli1 = zg.childNodes;
            for (i = figli1.length - 1; i >= 0; i--) {
                zg.removeChild(figli1[i]);
            }

        }

        clearInterval(intervallo);
        intervallo = 0;

    }
}