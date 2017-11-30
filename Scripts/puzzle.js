var piezas= document.getElementsByClassName('movil');
var tamWidth =[174,157,149,137,172,139,143,167,152,155,147,152];
var tamHeight=[114,105,105,140,128,130,115,127,118,122,119,116];
var elementSelect=0;
var currentX=0;
var currentY=0;
var currentPosX=0;
var currentPosY=0;
function iniciar(){
  for(var i=0;i<piezas.length;i++){
    piezas[i].setAttribute("width",tamWidth[i]);
    piezas[i].setAttribute("height",tamHeight[i]);
    piezas[i].setAttribute("x", Math.floor((Math.random()*10)+1));
    piezas[i].setAttribute("y", Math.floor((Math.random()*400)+1));
    piezas[i].setAttribute("onmousedown", "seleccionarElemento(evt)");
  }
}

function seleccionarElemento(evt) {
  elementSelect= reordenar(evt);
  currentX=evt.clientX;
  currentY=evt.clientY;
  currentPosX= parseFloat(elementSelect.getAttribute("x"));
  currentPosY= parseFloat(elementSelect.getAttribute("y"));
  elementSelect.setAttribute("onmousemove","moverElemento(evt)");
}
function moverElemento(evt){
  var dx= evt.clientX -currentX;
  var dy = evt.clientY - currentY;
  currentPosX = currentPosX + dx;
  currentPosY = currentPosY + dy;
  elementSelect.setAttribute("x", currentPosX);
  elementSelect.setAttribute("y", currentPosY);
  currentX= evt.clientX;
  currentY= evt.clientY;
  elementSelect.setAttribute("onmouseout","deseleccionarElemento(evt)");
  elementSelect.setAttribute("onmouseup","deseleccionarElemento(evt)");
  iman();
}
function deseleccionarElemento(evt){
  testing()
  if(elementSelect!=0){
    elementSelect.removeAttribute("onmousemove");
    elementSelect.removeAttribute("onmouseout");
    elementSelect.removeAttribute("onmouseup");
    elementSelect=0;
  }

}
var entorno = document.getElementById("entorno");

function reordenar(evt){
  var padre = evt.target.parentNode;
  var clone = padre.cloneNode(true);
  var id= padre.getAttribute("id");
  entorno.removeChild(document.getElementById(id));
  entorno.appendChild(clone);
  return entorno.lastChild.firstChild;
}

var origX=[429,327,210,210,312,450,448,322,209,209,325,439]
var origY=[113,111,110,180,183,196,291,278,284,366,366,369]

function iman(){
  for(var i=0;i<piezas.length;i++){
    if(Math.abs(currentPosX-origX[i])<15 && Math.abs(currentPosY-origY[i])<15){
      elementSelect.setAttribute("x",origX[i]);
      elementSelect.setAttribute("y",origY[i]);
    }
  }
}
function testing(){
  var padres= document.getElementsByClassName("padre");
  var ubicadas=0;
  for(var i=0;i<piezas.length;i++){
    var posX=parseFloat(padres[i].firstChild.getAttribute("x"));
    var posY=parseFloat(padres[i].firstChild.getAttribute("y"));
    ide=padres[i].getAttribute("id");
    if(origX[ide]==posX&&origY[ide]==posY){
      ubicadas=ubicadas+1;
    }
  }
  if(ubicadas==12){
    alert("Haz ganado");
    fondo= document.getElementById("fondo");
    fondo.style.opacity=1;
  }
}
iniciar();
