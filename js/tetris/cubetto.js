//classe Cubetto: classe che rappresenta l'unità base di ogni Pezzo che è formato da 4 cubetti disposti in vario modo...

function Cubetto(x, y, colore) {
    this.x = x;
    this.y = y;
    this.acceso = false;
    this.colore = colore;
    this.mattoncino = document.createElement("div");
    this.mattoncino.style.position = "absolute";
    this.mattoncino.style.left = (this.x * 20) + "px";
    this.mattoncino.style.top = (this.y * 20) + "px";
    this.mattoncino.style.width = "16px";
    this.mattoncino.style.height = "16px";
    this.mattoncino.style.backgroundColor = this.colore;
    this.mattoncino.style.visibility = "hidden";
    this.mattoncino.style.borderWidth = "2px";
    this.mattoncino.style.borderStyle = "ridge";
    this.mattoncino.style.borderColor = "gray";
    return this;

}

// metodo che aggiunge un cubetto al campo di gioco e lo mostra sulla schermo
Cubetto.prototype.mostra = function () {
    if (!this.acceso) {
        var terreno = document.getElementById("griglia");
        terreno.appendChild(this.mattoncino);
        this.acceso = true;
    }
};

//metodo che rimuove un cubetto dal campo di gioco e quindi lo nasconde
Cubetto.prototype.nascondi = function () {
    if (this.acceso) {
        var terreno = document.getElementById("griglia");
        terreno.removeChild(this.mattoncino);

        this.acceso = false;
    }
};

//metodo che muove un cubetto di x,y unità....usando come unità di misura il lato del cubetto(20px)
Cubetto.prototype.muovi = function (x, y) {
    this.x += x;
    this.y += y;
    this.mattoncino.style.left = (this.x * 20) + "px";
    this.mattoncino.style.top = (this.y * 20) + "px";

    if (this.y < 0) {
		this.mattoncino.style.visibility = "hidden";
    } else {
        this.mattoncino.style.visibility = "visible";

    }

};