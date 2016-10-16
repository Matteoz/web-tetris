//classe astratta che rappresenta un generico pezzo formato da 4 cubetti


function Pezzo() {
    this.cubetti = [];
    this.colonna = 0;
    this.riga = 0;
    this.acceso = false;
    this.fermo = false;
    this.colore = null;
    this.inCaduta = false;
    return this;
}

//metodo che mostra un pezzo facendo "accendere" sullo schermo i cubetti di cui è costituito
Pezzo.prototype.mostra = function () {
    var i;
    if (!this.acceso) {
        for (i = 0; i < this.cubetti.length; i++) {
            this.cubetti[i].mostra();
        }
        this.acceso = true;
    }

};

//metodo che muove un pezzo muovendo ciascun cubetto di cui è costituito
Pezzo.prototype.muovi = function (x, y) {
    var i;
    for (i = 0; i < this.cubetti.length; i++) {
        this.cubetti[i].muovi(x, y);
    }
    this.colonna += x;
    this.riga += y;
};


//metodo che ruota un pezzo
Pezzo.prototype.ruota = function () {
    var i;
    var j;
    var minx = this.cubetti[0].x;
    var miny = this.cubetti[0].y;
    var maxx = this.cubetti[0].x;
    var maxy = this.cubetti[0].y;

    for (i = 0; i < this.cubetti.length; i++) {
        minx = (minx <= this.cubetti[i].x) ? minx : this.cubetti[i].x;
        miny = (miny <= this.cubetti[i].y) ? miny : this.cubetti[i].y;
        maxx = (maxx >= this.cubetti[i].x) ? maxx : this.cubetti[i].x;
        maxy = (maxy >= this.cubetti[i].y) ? maxy : this.cubetti[i].y;


    }

    var larghezza = (maxx - minx) + 1;

    for (j = 0; j < this.cubetti.length; j++) {
        var vecchiax = this.cubetti[j].x;
        var vecchiay = this.cubetti[j].y;

        var xoffset = vecchiax - minx;
        var yoffset = vecchiay - miny;

        var nuovox = minx - yoffset;
        var nuovoy = miny + xoffset;

        this.cubetti[j].muovi((nuovox - vecchiax) + (larghezza - 1), (nuovoy - vecchiay));

    }


};