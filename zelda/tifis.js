var tablero;

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
	velocidad : 20 
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

	liz.lizy = new Image();
	liz.lizy.src = liz.lizURL;
	liz.lizy.onload = confirmarLiz;


/*
//Este segmento de código solo se utilizó para ejemplificar movimiento mediante un botón.
	var m = document.getElementById("mover");
	m.addEventListener("click",movimiento);
*/
//Invoco el evento de precionar el teclado y lanzo la funcion teclado
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
	if (tifis.frenteOK == true){
		tablero.drawImage(tifis.frente,tifis.x, tifis.y);
	}

	//Capa 3: Liz
	if (liz.lizOK){
		tablero.drawImage(liz.lizy, liz.x,liz.y);
	}
}

/*
//Este funcion se utilizo para ejplificar movimiento mediante un botón
function movimiento(){
	tifis.x+=10;
	dibujar();
}
*/