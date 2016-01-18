var dibujo, lienzo, t, b;

function inicio()
{
t = document.getElementById("usuario");
b = document.getElementById("dibujalo");


//En estas dos línas instancio el canvas para poder incovar funciones sobre el.
//Canvas es una imagenen blanco
	//Obtengo el canvas
	dibujo = document.getElementById("dibujito");
	//Obtengo el contexto de coordenadas dentro de una variable llamada lienzo, obtengo el contenido del canvas
	lienzo = dibujo.getContext("2d");

	b.addEventListener("click",dibujarGrilla);

//dibujarGrilla(lienzo);


//Este ejemplo dibuja el borde de mi Canvas
	lienzo.moveTo(0,0);
	lienzo.lineTo(300,0);
	lienzo.lineTo(300,300);
	lienzo.lineTo(0,300);
	lienzo.lineTo(0,0);
	//lienzo.strokeStyle = "#00FF00";
	lienzo.stroke();


/*
//Este ejemplo dibuja una linea desde la coordenada 100,100 hasta la coordenada 200,100
	lienzo.moveTo(100,100);
	lienzo.lineTo(200,100);
	lienzo.strokeStyle = "#F00";
	lienzo.stroke();
*/
	

//Este ejemplo es para dibujar un circulo
	lienzo.beginPath();
	lienzo.strokeStyle = "#00F";
	lienzo.fillStyle = "#00F";
	//Los primeros dos parametros: (150, 150) son las coordenadas del puntro central del circulo.
	//Los parametros de 100 y Math.PI * 2 son los radianes que se dibujarán del circulo.
	//false indica que el trazo es en contra de las manecillas del reloj.
	lienzo.arc(150,150,100,(Math.PI*2),false);
	lienzo.stroke();
	lienzo.closePath();
	lienzo.fill();


}

function dibujarGrilla (){
	var rayas = Number(t.value);
	var l=lienzo;
	var ancho=300, alto=300;
	var anchoLineas= ancho / rayas;
	var linea;
	var limiteX = (ancho / anchoLineas)*2;
	var limiteY = (alto / anchoLineas)*2;
	
	l.strokeStyle="#AAA";
	

	/* DIBUJO DE GRILLA CUADRICULADA
   //Dibujando  ejes verticales de la grilla
	for (linea = 0; linea<=limiteX; linea++){
		l.beginPath();
		l.moveTo(linea*anchoLineas,0);
		l.lineTo(linea*anchoLineas,300);
		l.stroke();
		l.closePath();		
	}
	//Dibujando linas horizontales de la grilla
	for (linea =0; linea<=limiteY; linea++) {
		l.beginPath();
		l.moveTo(0,linea*anchoLineas);
		l.lineTo(300,linea*anchoLineas);
		l.stroke();
		l.closePath();		
	}
	//FIN DE DIBUJO DE GRILLA CUADRICULADA*/

/*
	//Dibujando lineas en diagonal con el eje de las X
	for (linea = 0; linea<=limiteX; linea++){
		punto = linea * anchoLineas;
		punto2= ancho -punto;
		l.beginPath();
		l.moveTo(punto2,0);
		l.lineTo(ancho,punto);
		l.stroke();
		l.closePath();
	}
*/
	//Dibujado de lineas en diagonal con el eje de las X
	for (linea=0; linea<=limiteX; linea++){
		punto=linea*anchoLineas;
		l.beginPath();
		l.moveTo(punto,0);
		l.lineTo(0,punto);
		l.stroke();
		l.closePath();
		}

	//Dibujado de lineas en diagonal con el eje de las Y
	for (linea=0; linea<=limiteY; linea++){
		punto = linea * anchoLineas;
		punto2 = alto-punto;
		l.beginPath();
		l.moveTo(0,punto2);
		l.lineTo(punto,alto);
		l.stroke();
		l.closePath();
	}
	


	
	
}