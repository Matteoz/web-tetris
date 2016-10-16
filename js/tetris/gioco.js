//classe che implementa Tetris vero e proprio e inizializza tutte le componenti del gioco


function Gioco() {
    this.LaGriglia = new Griglia();
    this.IlPunteggio = new Punteggio();
    this.LaPausa = new Pausa();

    this.inpausa = false;
    this.gameover = false;

}
//metodo che sospende il loop del gioco fino a che non viene tolta la pausa
Gioco.prototype.mettinpausa = function () {
    this.inpausa = !this.inpausa;
    var messoinpausa = document.getElementById("pausa");
    if (this.inpausa) {
        messoinpausa.style.visibility = "visible";
    } else {
        messoinpausa.style.visibility = "hidden";
    }

};


//metodo che controlla se la riga 0 della Griglia ovvero la riga più in alto è occupata da almeno un cubetto, se lo è allora restituisce vero cioè che si è perso
Gioco.prototype.haiperso = function () {
    var i;
    for (i = 0; i < 10; i++) {
        if (this.LaGriglia.cubetti[i][0] !== null) {
            return true;
        }
    }
    return false;

};

//metodo che viene invocato da particolari eventi(quando si premono le freccette sx o dx) e fa sì che il pezzo venga spostato di una unità a sx o dx
Gioco.prototype.muovipezzora = function (x, y) {
    var temp = this.LaGriglia.prossimopezzo;
    temp.muovi(x, y);
    if (this.LaGriglia.fuorigriglia(temp)) {
        temp.muovi(-1 * x, -1 * y);
    }

};

//metodo che fa cadere verso il basso il pezzo che attualmente dobbiamo posizionare( fornisce l'effeto della gravità sul pezzo)
Gioco.prototype.cadutapezzo = function () {
    var a = this.LaGriglia.prossimopezzo;

    while (!this.LaGriglia.fuorigriglia(a)) {
        a.muovi(0, 1);
    }
    a.muovi(0, -1);
    a.fermo = true;
};

// metodo che gestisce ciò che avviene all'interno del campo di gioco una volta che un pezzo non essere mosso ulteriormente( prende i cubetti di cui è fatto e li posiziona nella griglia, prepara il prossimo pezzo, controlla se abbiamo completato qualche riga e aggiorna il punteggio
Gioco.prototype.gestisci = function () {
    this.LaGriglia.sbriciola();
    this.LaGriglia.prossimopezzo = dammiprossimopezzo();
    this.LaGriglia.prossimopezzo.mostra();
    var e = this.LaGriglia.pulisciRiga();
    this.IlPunteggio.righefatte += e;
    this.IlPunteggio.aggiorna();
};
// metodo che viene nvocato da un particolare evento(quando l'utente preme spazio e vuole ruotare il pezzo)
Gioco.prototype.ruotapezzora = function () {
    this.LaGriglia.prossimopezzo.ruota();
    if (this.LaGriglia.fuorigriglia(this.LaGriglia.prossimopezzo)) {
        this.LaGriglia.prossimopezzo.ruota();
        this.LaGriglia.prossimopezzo.ruota();
        this.LaGriglia.prossimopezzo.ruota();
    }
};