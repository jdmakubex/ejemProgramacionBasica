function inicio(){

/*
// Declarando un objeto con notación JSON
// Este tipo de ejemplo se utiliza cuando los objetos se utilizan pocas veces
// //Pero declarados así no se puden utilizar para multiples propositos.
var perro = {
	agilidad:50,
	fuerza:100,
	limpieza:false,
	longevidad:14,
	amor:true,
	voz: function(){
		alert("Guau");
	}
};
perro.voz();
*/

//Declarando Objetos con notación de clases
// Clase es el Objeto maestro de que se derivan otros objetos
// Clase : Es la definición del objeto 
// This Instancia la Varible que viene por parametro y permite aplicar
// los atriburos que contienen la clase a esa variable formando un nuevo objeto
var nombre = "frisco";
var Mascota = function (n,v){
	this.nombre = n;
	this.voz=v;
}

//Prototype es meterme a la construccion internet de los metodos de los objetos
Mascota.prototype.hablar = function ()
{
	alert(this.nombre + " Dice: " +this.voz);

}

//De esta forma instanciamos un nuevo objeto, lo declaramos y los instanciamos a la vez
var perro = new Mascota ("roco", "Guau");
var gato = new Mascota ("Garfield", "Miouuuw");
perro.hablar();
gato.hablar();
alert("El perro es :"+perro.nombre);
alert("El gato es : "+gato.nombre);
}