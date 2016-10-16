function Score(name, score) {
    this.name = name;
    this.score = score;
}

function ordinamento(a, b) {

    if (a.score < b.score) {
        return -1;
    } else {
        if (a.score > b.score) {
            return 1;
        } else {
            return 0;
        }
    }
}

function Highscores() {
    this.punteggi = [];


    this.carica = function () {
        var i;
        var s = Cookies.getCookie("Classifica");
        if (s.length) {
            var punteggi = s.split('|');
            for (i = 0; i < punteggi.length; i++) {
                var temp_punt = punteggi[i].split(':');
                this.punteggi.push(new Score(temp_punt[0], temp_punt[1]));

            }

        }

    };

    this.salva = function () {
        var i;
        var pun = [];
        for (i = 0; i < this.punteggi.length; i++) {
            pun.push(this.punteggi[i].name + ":" + this.punteggi[i].score);
        }
        var lista = pun.join('|');
        Cookies.setCookie("Classifica", lista, 3600 * 24 * 1000);
    };

    this.possoAggiungere = function (punteggio) {
        var i;
        if (this.punteggi.length < 10) {
            return true;
        }
        for (i = this.punteggi.length - 1; i >= 0; --i) {
            if (this.punteggi[i].score < punteggio) {
                return true;
            }
        }
        return false;
    };

    this.aggiungi = function (name, score) {
        var i;
        if (this.punteggi.length < 10) {
            this.punteggi.push(new Score(name, score));
        } else {
            for (i = 0; i < this.punteggi.length; i++) {
                if (this.punteggi[i].score < score) {
                    this.punteggi.splice(i, 1);
                    this.punteggi.push(new Score(name, score));
                    break;
                }
            }
        }
        this.punteggi.sort(ordinamento);
        this.salva();
    };

}



var TuttiPunteggi = new Highscores();
TuttiPunteggi.carica();