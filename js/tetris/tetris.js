// variabile globale che contiene Tetris
var IlGioco = null;
var intervallo = 0;

//metodo principale che inizializza il gioco 

function main() {

    IlGioco = new Gioco();
    var corpo = document.getElementById("zonagioco");
    corpo.appendChild(IlGioco.LaGriglia.nodo);
    IlGioco.LaGriglia.mostra();
    corpo.appendChild(IlGioco.IlPunteggio.punt);
    corpo.appendChild(IlGioco.LaPausa.nodopausa);
    set();
    intervallo = setInterval(main1, 450);

}