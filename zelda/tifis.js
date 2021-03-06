var tablero, direccion;

var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT:39
};

//Declaro mi objeto fondo de tipo JSON (JavaScript Object Notation)
var fondo = {
	imagenURL: "fondo.png"
};

var tifis = {
	y:100,
	x:100,
	frenteURL: "diana-frente.png",
	frenteOK: false,
	atrasURL: "diana-atras.png",
	atrasOK: false,
	derURL: "diana-der.png",
	derOK: false,
	izqURL: "diana-izq.png",
	izqOK: false,
	velocidad : 50 
};

var liz = {
	lizURL: "liz.png",
	lizOK: false,
	x:400,
	y:200

};

function inicio(){

	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");
	//Esto es un objeto que me permite crear imagenes en los navegadores
	fondo.imagen =  new Image();
	console.log(fondo);
	//A continuacíón agregamos la foto
	fondo.imagen.src = fondo.imagenURL;

	//Al desṕués de descargar la imagen, disparar la funcion dibujarFondo
	fondo.imagen.onload = confirmarFondo;

	tifis.frente = new Image();
	tifis.frente.src = tifis.frenteURL;
	tifis.frente.onload = confirmarFrente;

	tifis.atras = new Image();
	tifis.atras.src = tifis.atrasURL;
	tifis.atras.onload = confirmarAtras;

	tifis.der = new Image();
	tifis.der.src = tifis.derURL;
	tifis.der.onload = confirmarDer;

	tifis.izq = new Image();
	tifis.izq.src = tifis.izqURL;
	tifis.izq.onload = confirmarIzq;

	liz.lizy = new Image();
	liz.lizy.src = liz.lizURL;
	liz.lizy.onload = confirmarLiz;


/*
//Este segmento de código solo se utilizó para ejemplificar movimiento mediante un botón.
	var m = document.getElementById("mover");
	m.addEventListener("click",movimiento);
*/
//Invoco el evento de precionar el teclado y lanzo la funcion teclado
/////*:::::::::::::::::::::::::::::::ojo:::::::::::::::::::::::::::::::::.*/
document.addEventListener("keydown", teclado);



}

function teclado(datos){
	// Guardo en "codigo" el numero de la tecla oprimida
	var codigo = datos.keyCode;
	
	if (codigo == teclas.UP){
		tifis.y-=tifis.velocidad;
	}

	if (codigo == teclas.DOWN){
		tifis.y+=tifis.velocidad;
	}


	if (codigo == teclas.LEFT){
			tifis.x-=tifis.velocidad;
		}


	if (codigo == teclas.RIGHT){
			tifis.x+=tifis.velocidad;
		}

	direccion = codigo;
	dibujar();
}

function confirmarFondo(){

	fondo.imagenOK = true;
	dibujar();
}

function confirmarFrente(){
	tifis.frenteOK = true;
	dibujar();
}

function confirmarAtras(){
	tifis.atrasOK = true;
	dibujar();
}

function confirmarDer(){
	tifis.derOK = true;
	dibujar();
}

function confirmarIzq(){
	tifis.izqOK = true;
	dibujar();
}

function confirmarLiz(){
	liz.lizOK = true;
	dibujar();
}

function dibujar(){
	// Capa 1: Fondo
	if (fondo.imagenOK == true){
		tablero.drawImage(fondo.imagen,0,0);
	}

	//Capa 2: Tifis
	if (liz.lizOK){
		tablero.drawImage(liz.lizy, liz.x,liz.y);
	}
	

	//Capa 3: Liz
	var tifiDibujo = tifis.frente;
	if (tifis.frenteOK && tifis.atrasOK && tifis.izqOK && tifis.derOK){

		if (direccion == teclas.UP){
			tifiDibujo = tifis.atras;
			//Se establecen los obstaculos hacia arriba
			if ((tifis.y <0)||(tifis.y<250 && tifis.x<150 && tifis.y >150) || (tifis.x==200 &&tifis.y<250)|| (tifis.y < 400 && tifis.y > 300 && tifis.x>=150)){
				tifis.y += tifis.velocidad;
				//console.log("Y igual a: ",tifis.y);
			}
		}

		if (direccion == teclas.DOWN){
			tifiDibujo = tifis.frente;
			//Se establecen  los obstaculos hacia abajo
			if ((tifis.y>300 && tifis.x>=150 && tifis.y<450) || (tifis.y>150  && tifis.x<150 && tifis.y<300) || (tifis.y >=500) ) {
				tifis.y -= tifis.velocidad;
				//console.log("Y igual a: ",tifis.y);
			}
		}

		if (direccion == teclas.LEFT){
			tifiDibujo = tifis.izq;
			//Se establecen obstaculos hacia la izquierda
			if ((tifis.x < 0) || ( tifis.y===200 && tifis.x===100) || (tifis.y <250 && tifis.x>150  && tifis.x <250)){
				tifis.x += tifis.velocidad;
			
			}
		}

		if (direccion == teclas.RIGHT){
			tifiDibujo = tifis.der;
			//Se establecen Obstaculos hacia la derecha
			if ((tifis.x >=500)||(tifis.x===150 &&  tifis.y ===350) || (tifis.y < 250 && tifis.x < 250 && tifis.x > 150)){
				tifis.x -= tifis.velocidad;
			}
		}

		tablero.drawImage(tifiDibujo,tifis.x, tifis.y);
			console.log("X igual a: ",tifis.x);

				console.log("Y igual a: ",tifis.y);
	}

	
}

/*
//Este funcion se utilizo para ejplificar movimiento mediante un botón
function movimiento(){
	tifis.x+=10;
	dibujar();
}
*/