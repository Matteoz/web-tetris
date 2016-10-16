function mostraistruzioni() {
    var i;
    var com = ["Freccia Sinistra: Muovi A Sinistra", "Freccia Destra : Muovi A Destra", "Spazio: Ruota", "Esc: Metti/Togli Pausa", "Freccia Giù: Fai Cadere Il Pezzo"];
    var menu = document.getElementById("menuistr");
    menu.style.visibility = "visible";
    menu.style.borderWidth = "2px";
    menu.style.borderStyle = "outset";
    menu.style.borderColor = "blue";

    var titoloComandi = document.createElement("p");
    titoloComandi.style.textAlign = "center";
    titoloComandi.style.margin = "0px";
    titoloComandi.style.padding = "0px";
    titoloComandi.style.fontFamily = "Trebuchet, sans-serif";
    titoloComandi.style.fontWeight = "bold";
    titoloComandi.appendChild(document.createTextNode("Comandi:"));
    menu.appendChild(titoloComandi);

    var lista = document.createElement("ul");
    lista.style.visibility = "visible";
    lista.style.padding = "0px";
    lista.style.margin = "0px";
    for (i = 0; i < 5; i++) {
        var primoelem = document.createElement("li");
        primoelem.style.fontFamily = "Trebuchet, sans-serif";
        primoelem.style.marginLeft = "25px";
        primoelem.appendChild(document.createTextNode(com[i]));
        primoelem.style.visibility = "visible";
        lista.appendChild(primoelem);
    }
    menu.appendChild(lista);
    var stecca = document.getElementById("stecca");
    stecca.style.visibility = "visible";
}

function nascondiistruzioni() {
    var menu = document.getElementById("menuistr");
    menu.style.visibility = "hidden";
    var figli = menu.childNodes;
    for (i = figli.length - 1; i >= 0; i--) {
        menu.removeChild(figli[i]);
    }

    var stecca = document.getElementById("stecca");
    stecca.style.visibility = "hidden";
}