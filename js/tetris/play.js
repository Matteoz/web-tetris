//metodo che viene attivato quando si clicca sull'icona "play" e fa partire il gioco e visualizza il menu per una nuova partita o per resettare quella in corso


function gioca() {
    if (intervallo === 0) {
		var scherminiz = document.getElementById("schermatainiziale");
		if(scherminiz){
			var figli = scherminiz.childNodes;
			for (i = figli.length - 1; i >= 0; i--) {
				scherminiz.removeChild(figli[i]);
			}
		}
        resetta();
        main();
        menu = document.getElementById("nuovapartita");
        menu.style.visibility = "visible";
        
    }

}