// funzione che crea casualmente e restituisce uno dei sette pezzi di tetris

function dammiprossimopezzo() {
    var n = Math.floor(Math.random() * 7);
    //var n=5;
    switch (n) {
    case 0:
        return new pezzoI();
    case 1:
        return new pezzoO();
    case 2:
        return new pezzoT();
    case 3:
        return new pezzoL();
    case 4:
        return new pezzoJ();
    case 5:
        return new pezzoS();
    case 6:
        return new pezzoZ();
    }
}