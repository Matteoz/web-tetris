//classe discendente da Pezzo e rappresenta il pezzo verticale


function pezzoI() {
    this.colore = "aqua";
    this.colonna = 5;
    this.riga = -4;
    this.cubetti[0] = new Cubetto(this.colonna, this.riga, this.colore);
    this.cubetti[1] = new Cubetto(this.colonna, this.riga + 1, this.colore);
    this.cubetti[2] = new Cubetto(this.colonna, this.riga + 2, this.colore);
    this.cubetti[3] = new Cubetto(this.colonna, this.riga + 3, this.colore);
}
pezzoI.prototype = new Pezzo();