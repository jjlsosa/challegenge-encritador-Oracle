const texto1= document.querySelector("#texto1");
const texto2= document.querySelector("#texto2");

const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");



function encriptar(){
cuadroDerecha.style.display = "block";
dibujo.style.display = "none";
var texto = texto1.value;
var resultado = texto.replaceAll("e", "enter")
.replaceAll("i", "imes")
.replaceAll("o", "ober")
.replaceAll("a", "ai")
.replaceAll("u", "ufat");

texto2.value = resultado;
}

function desencriptar(){
    cuadroDerecha.style.display = "block";
    var texto = texto2.value;
    var resultado = texto.replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

    texto2.value = resultado;

}

function copiar(){
    var texto = texto2.value;
    navigator.clipboard.writeText(texto);
    texto1.value = "";
    resultado.focus();
}


btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;
