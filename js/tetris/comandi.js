//gestore eventi


function onKeyHandler(e) {
    e = (!e) ? window.event : e; //Explorer -> !e
    var key = (e.which) ? e.which : e.keyCode; //Firefox -> e.which
    switch (key) {

    case 27:
        if (IlGioco.gameover === true) {
            break;
        } else {
            IlGioco.mettinpausa();
            break;
        }

    case 32:
        if (IlGioco.inpausa === true || IlGioco.gameover === true) {
            break;
        } else {
            IlGioco.ruotapezzora();
            break;
        }

    case 37:
        if (IlGioco.inpausa === true || IlGioco.gameover === true) {
            break;
        } else {
            IlGioco.muovipezzora(-1, 0);
            break;
        }

    case 39:
        if (IlGioco.inpausa === true || IlGioco.gameover === true) {
            break;
        } else {
            IlGioco.muovipezzora(1, 0);
            break;
        }

    case 40:
        if (IlGioco.inpausa === true || IlGioco.gameover === true) {
            break;
        } else {
            IlGioco.cadutapezzo();
            break;
        }

    default:
        break;
    }
}

function set() {
    document.onkeydown = onKeyHandler;
}