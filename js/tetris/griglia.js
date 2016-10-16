//classe che implementa il Campo di Gioco che è una griglia rettangolare 10x20 di elementi di tipo "Cubetto"


function Griglia() {
    var i;
    var j;
    this.cubetti = [];
    for (i = 0; i < 10; i++) {
        this.cubetti[i] = [];
        for (j = 0; j < 20; j++) {
            this.cubetti[i][j] = null;
        }
    }

    this.acceso = false;
    this.prossimopezzo = dammiprossimopezzo();

    this.nodo = document.createElement("div");
    this.nodo.style.position = "absolute";
    this.nodo.id = "griglia";
    this.nodo.style.left = "0px";
    this.nodo.style.top = "0px";
    this.nodo.style.width = "200px";
    this.nodo.style.height = "400px";
    this.nodo.style.backgroundColor = "#3399FF";
    this.nodo.style.visibility = "hidden";
    this.nodo.style.zIndex = "10";

}

//metodo che mostra il campo e il pezzo che inizierà a cadere dall'alto
Griglia.prototype.mostra = function () {

    this.nodo.style.visibility = "visible";
    this.prossimopezzo.mostra();
    this.acceso = true;

};

//metodo che viene invocato una volta che il pezzo che sta scendendo si ferma perchè trova qualche ostacolo e non può muoversi ulteriormente, allora considera ciascun Cubetto di cui è formato e lo aggiunge al campo di gioco in modo da occupare 4 caselle della griglia
Griglia.prototype.sbriciola = function () {
    var i;
    for (i = 0; i < this.prossimopezzo.cubetti.length; i++) {
        var prox = this.prossimopezzo.cubetti[i];
        this.cubetti[prox.x][prox.y] = prox;
    }

};

//metodo che controlla che un pezzo che sta cadendo non esca dal campo di gioco lateralmente o una volta arrivato in basso, e inoltre controlla che le caselle della griglia in cui si trova in quell'istante non siano già occupate da altri cubetti che c'erano precedentemente
Griglia.prototype.fuorigriglia = function (blocco) {
    var i;
    for (i = 0; i < blocco.cubetti.length; i++) {
        if (blocco.cubetti[i].y > 19) {
            return true;
        }
        if (blocco.cubetti[i].x < 0) {
            return true;
        }
        if (blocco.cubetti[i].x > 9) {
            return true;
        }
        if (this.cubetti[blocco.cubetti[i].x][blocco.cubetti[i].y]) {
            return true;
        }
    }
    return false;
};

// metodo che fa muovere un pezzo verso il basso di una unità( cioè di 20px) e controlla che la nuova posizione possa essere mantenuta perchè non è già occupata o è fuori dalla griglia
Griglia.prototype.possomuovere = function (blocco) {
    blocco.muovi(0, 1);
    var no = this.fuorigriglia(blocco);
    blocco.muovi(0, -1);
    return no;

};

//metodo che viene invocato ongi volta un pezzo è stato posizionato e prima che arrivi il successivo e controlla se esiste qualche riga completa e nel caso la elimina e incrementa il contatore 
Griglia.prototype.pulisciRiga = function () {
    var i;
    var j;
    var z;
    var x;
    var w;
    var count = 0;
    var pieno = true;
    var rigapiena = null;
    for (i = 0; i < 20; i++) {
        for (j = 0; j < 10; j++) {
            if (!this.cubetti[j][i]) {
                pieno = false;
            }

        }
        if (pieno) {
            rigapiena = i;
            for (z = 0; z < 10; z++) {
                this.cubetti[z][rigapiena].nascondi();
                this.cubetti[z][rigapiena] = null;
            }
            for (x = rigapiena; x > 0; x--) {
                for (w = 0; w < 10; w++) {
                    this.faiScenderePezzi(w, x - 1, w, x);
                }

            }
            count++;
        }

        pieno = true;
    }
    return count;
};
//metodo che viene chiamato quando viene trovata una riga completa e che fa scendere tutti i pezzi al di sopra della riga che viene eliminata di una unità verso il basso
Griglia.prototype.faiScenderePezzi = function (x0, y0, x1, y1) {
    temp = this.cubetti[x0][y0];
    if (temp !== null) {
        var mosso = new Cubetto(temp.x, temp.y, temp.colore);
        this.cubetti[x0][y0].nascondi();
        this.cubetti[x0][y0] = null;
        this.cubetti[x1][y1] = mosso;

        mosso.muovi(x1 - x0, y1 - y0);
        mosso.mostra();
    }


};