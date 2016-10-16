function mostraClassifica() {
    var mc = document.createElement("div");
    mc.id = "divClassifica";
    mc.style.position = "absolute";
    mc.style.width = "984px";
    mc.style.height = "394px";
    mc.style.left = "5px";
    mc.style.top = "5px";
    mc.style.zIndex = "50";
    mc.style.backgroundColor = "#3399FF";
    mc.style.fontFamily = "Trebuchet";
    mc.style.visibility = "visible";
    mc.style.borderWidth = "3px";
    mc.style.borderStyle = "ridge";
    mc.style.borderColor = "blue";

    contenitorefondo = document.createElement("div");
    contenitorefondo.style.position = "absolute";
    contenitorefondo.style.top = "360px";
    contenitorefondo.style.left = "170px";
    var notabene = document.createElement("p");
    notabene.appendChild(document.createTextNode("Attenzione!!! I tuoi punteggi vengono salvati nei cookies, quindi non sono visibili ad altri pc."));
    notabene.style.fontWeight = "bolder";
    contenitorefondo.appendChild(notabene);
    mc.appendChild(contenitorefondo);

    var tabella = document.createElement("table");
    tabella.setAttribute("border", "0");
    tabella.setAttribute("cellspacing", "0");
    tabella.setAttribute("cellpadding", "0");
    tabella.style.textAlign = "center";
    tabella.style.position = "absolute";
    tabella.style.left = "300px";
    tabella.style.top = "20px";
    tabella.style.width = "400px";
    tabella.style.color = "white";
    tabella.style.zIndex = "51";



    var titolotab = document.createElement("caption");
    titolotab.style.color = "black";
    titolotab.style.fontStyle = "italic";
    titolotab.appendChild(document.createTextNode("I Migliori Dieci Punteggi"));
    tabella.appendChild(titolotab);

    var primariga = document.createElement("tr");
    var th1 = document.createElement("th");
    th1.appendChild(document.createTextNode("Posizione"));
    var th2 = document.createElement("th");
    th2.appendChild(document.createTextNode("Nome"));
    var th3 = document.createElement("th");
    th3.appendChild(document.createTextNode("Righe Cancellate"));
    primariga.appendChild(th1);
    primariga.appendChild(th2);
    primariga.appendChild(th3);
    tabella.appendChild(primariga);

    var j = 0;
    var i = 0;
    for (i = TuttiPunteggi.punteggi.length - 1; i >= 0; i--) {
        var riga = document.createElement("tr");
        var cella1 = document.createElement("td");
        cella1.appendChild(document.createTextNode(++j + "°"));
        var cella2 = document.createElement("td");
        cella2.appendChild(document.createTextNode(TuttiPunteggi.punteggi[i].name));
        var cella3 = document.createElement("td");
        cella3.appendChild(document.createTextNode(TuttiPunteggi.punteggi[i].score));

        riga.appendChild(cella1);
        riga.appendChild(cella2);
        riga.appendChild(cella3);
        tabella.appendChild(riga);
    }

    mc.appendChild(tabella);



    document.getElementById("centro").appendChild(mc);


}

function nascondiClassifica() {

    var i;
    var nodo = document.getElementById("divClassifica");
    if (nodo) {
        var figli = nodo.childNodes;
        for (i = figli.length - 1; i >= 0; i--) {
            nodo.removeChild(figli[i]);
        }
        document.getElementById("centro").removeChild(nodo);
    }


}