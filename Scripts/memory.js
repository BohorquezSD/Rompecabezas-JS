vectorImagen = new Array(12)
var valor1=0;
var valor2=0;
var turno=0;

function cargarAleatorio() {
  var i=0;
  var datos="";
  for(i=1;i<7;i++){
    vectorImagen[i]=i+".jpg";
  }
  var k=1
  for(i=7;i<13; i++){
    vectorImagen[i]=k+".jpg";
    k++;
  }
  var aux=" ";
  for(i=1;i<13;i++){
    var aleatorio= Math.round(Math.random()*11)+1;
    aux=vectorImagen[i];
    vectorImagen[i]=vectorImagen[aleatorio];
    vectorImagen[aleatorio]=aux;
  }
  for(i=1;i<13;i++){
    document.getElementById(i+"a").src="Image/memory/"+vectorImagen[i];
  }
}
function limpiar() {
    for(i=1;i<13;i++){
      document.getElementById(i+"a").src="Image/memory/0.jpg";
    }
}
var temp=0;
var contador=0;
function evento(valor) {
  if(temp!=0){
    document.getElementById(temp+"a").src="Image/memory/0.jpg";
    temp=0;
  }
  if(turno==0){
    valor1=valor;
    turno=1;
    document.getElementById(valor1+"a").src="Image/memory/"+vectorImagen[valor1];
  }else {
    valor2=valor;
    turno=0;
    document.getElementById(valor2+"a").src="Image/memory/"+vectorImagen[valor2];

    if(vectorImagen[valor1]!=vectorImagen[valor2]){
      document.getElementById(valor1+"a").src="Image/memory/0.jpg";
      temp=valor2;
    }else{
      contador++;
    }if(contador==6){
      alert("Ha ganado si desea jugar de nuevo presione el boton");
    }
  }

}
cargarAleatorio();
limpiar();
