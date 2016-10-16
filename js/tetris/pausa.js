function Pausa() {

    this.nodopausa = document.createElement("div");
    this.nodopausa.style.position = "absolute";
    this.nodopausa.id = "pausa";
    this.nodopausa.style.left = "0px";
    this.nodopausa.style.top = "100px";
    this.nodopausa.style.width = "196px";
    this.nodopausa.style.height = "96px";
    this.nodopausa.style.borderWidth = "2px";
    this.nodopausa.style.borderStyle = "ridge";
    this.nodopausa.style.borderColor = "red";
    this.nodopausa.style.backgroundColor = "red";
    this.nodopausa.style.visibility = "hidden";
    this.nodopausa.style.fontFamily = "Trebuchet";
    this.nodopausa.style.fontWeight = "bold";
    this.nodopausa.style.fontSize = "20px";
    this.nodopausa.style.textAlign = "center";
    this.nodopausa.style.paddingTop = "50px";
    this.nodopausa.style.zIndex = "20";

    var par1 = document.createElement("p");
	par1.style.fontFamily = "Trebuchet";
	par1.style.fontWeight = "bold";
    par1.style.fontSize = "22px";
    var text1 = document.createTextNode("In Pausa!!!");
	var par2 = document.createElement("p");
	par2.style.fontFamily = "Trebuchet";
	par2.style.fontSize = "12px";
	var text2 = document.createTextNode("Premi Esc per riprendere...");
	par1.appendChild(text1);
	par2.appendChild(text2);
    this.nodopausa.appendChild(par1);
    this.nodopausa.appendChild(par2);

}