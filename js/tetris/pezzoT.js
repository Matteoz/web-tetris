//classe discendente da Pezzo e rappresenta il pezzo a T


function pezzoT() {
    this.colore = "magenta";
    this.colonna = 4;
    this.riga = -2;
    this.cubetti[0] = new Cubetto(this.colonna, this.riga, this.colore);
    this.cubetti[1] = new Cubetto(this.colonna + 1, this.riga, this.colore);
    this.cubetti[2] = new Cubetto(this.colonna + 1, this.riga + 1, this.colore);
    this.cubetti[3] = new Cubetto(this.colonna + 2, this.riga, this.colore);
}
pezzoT.prototype = new Pezzo();