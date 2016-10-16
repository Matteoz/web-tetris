//metodo che viene gestisce la vita di ciascun pezzo che sta scendendo nella griglia

function main1() {
    try {
        if (IlGioco.haiperso()) {
            throw "GAMEOVER";
        }
        if (IlGioco.inpausa === true) {
            return;
        }
        var temp = IlGioco.LaGriglia.prossimopezzo;
        IlGioco.muovipezzora(0, 1);
        if (temp.fermo && IlGioco.LaGriglia.possomuovere(temp)) {
            IlGioco.gestisci();
        }
        temp.fermo = IlGioco.LaGriglia.possomuovere(temp);

    } catch (er) {
        if (er === "GAMEOVER") {
            IlGioco.gameover = true;
            clearInterval(intervallo);
            intervallo = 0;
            menu = document.getElementById("nuovapartita");
            menu.style.visibility = "hidden";

            var rif = document.getElementById("griglia");
            rif.appendChild(new Gameover().go);

            if (TuttiPunteggi.possoAggiungere(IlGioco.IlPunteggio.righefatte)) {
                inserimentoEsalvataggio();



            }
        }

    }

}