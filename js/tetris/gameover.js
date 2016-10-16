//metodo che viene chiamato nel caso siamo nella situazione game over


function Gameover() {

    this.go = document.createElement("div");
    this.go.id = "gameover";
    var text = document.createTextNode("Game Over");
    this.go.appendChild(text);
    this.go.style.position = "absolute";
    this.go.style.left = "0px";
    this.go.style.top = "78px";
    this.go.style.width = "404px";
    this.go.style.height = "204px";
    this.go.style.textAlign = "center";
    this.go.style.paddingTop = "50px";
    this.go.style.fontFamily = "Trebuchet";
    this.go.style.fontWeight = "bold";
    this.go.style.fontSize = "20px";
    this.go.style.backgroundColor = "red";
    this.go.style.zIndex = "20";
    this.go.style.visibility = "visible";
    this.go.style.borderWidth = "2px";
    this.go.style.borderStyle = "ridge";
    this.go.style.borderColor = "red";


}