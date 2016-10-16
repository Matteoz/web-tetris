function inserimentoEsalvataggio() {
    var g = document.getElementById("gameover");
    var spiega = document.createElement("p");
    spiega.style.fontSize = "15px";
    spiega.appendChild(document.createTextNode("Per salvare il tuo punteggio, inserisci un nome e clicca su \"Salva\"; altrimenti clicca su \"Annulla\" per uscire"));
    g.appendChild(spiega);

    var par = document.createElement("p");
    par.id = "miopar";

    var inseriscinome = document.createElement("input");
    inseriscinome.type = "text";
    inseriscinome.name = "boxnome";
    inseriscinome.value = "";
    var conferma = document.createElement("input");
    conferma.type = "button";
    conferma.name = "conferma";
    conferma.value = "Salva";
    conferma.setAttribute("onClick", "controllaCampo()");
    var cancella = document.createElement("input");
    cancella.type = "button";
    cancella.name = "annulla";
    cancella.value = "Annulla";
    cancella.setAttribute("onClick", "esciSenzaSalvare()");
    par.appendChild(inseriscinome);
    g.appendChild(par);
    g.appendChild(conferma);
    g.appendChild(cancella);


    document.getElementById("miopar").firstChild.focus();
}


function controllaCampo() {

    var nome = document.getElementById("miopar").firstChild.value;
    regex = /[^a-zA-Z0-9_]/;

    if (nome && !(regex.test(nome))) {
        resetta();

        TuttiPunteggi.aggiungi(nome, IlGioco.IlPunteggio.righefatte);
    } else {
        document.getElementById("miopar").firstChild.title = "Inserisci un nome valido contenente lettere e/o numeri e/o il carattere _";
        document.getElementById("miopar").firstChild.focus();
        document.getElementById("miopar").firstChild.select();


    }

}

function esciSenzaSalvare() {
    resetta();

}