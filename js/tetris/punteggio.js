//classe che implementa il punteggio(da aggiungere eventualmente ancora un sistema di punteggio) per adesso conta solo quante righe ho distrutto


function Punteggio() {

    this.righefatte = 0;

    this.punt = document.createElement("div");
    this.punt.style.position = "absolute";
    this.punt.id = "punteggio";
    this.punt.style.left = "250px";
    this.punt.style.top = "0px";
    this.punt.style.width = "100px";
    this.punt.style.height = "22px";

    this.punt.style.backgroundColor = "white";
    this.punt.style.borderStyle = "double";
    this.punt.style.borderColor = "#3399FF";
    this.punt.style.visibility = "visible";
    this.punt.style.fontFamily = "Trebuchet";
    this.punt.style.fontWeight = "bold";
    this.punt.style.fontSize = "20px";
    this.punt.style.zIndex = "10";


    var score = document.createTextNode('Righe: ' + this.righefatte);
    this.punt.appendChild(score);

}

//metodo che aggiorna sullo schermo il punteggio
Punteggio.prototype.aggiorna = function () {
    document.getElementById("punteggio").childNodes[0].nodeValue = "Righe: " + this.righefatte;
    
};