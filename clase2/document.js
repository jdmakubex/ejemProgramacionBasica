/*
Los objetos son un concepto nucleo, en programacion, existen objetos html.

Objetos del navegador y DOM: 
En navigador
el windows

Objetos Creados por el usuario:

//DOCUMENT OBJECT MODEL:
//Objeto
// Los objetos tienen Variables
// Los objetos tienen funciones

por ejemplo document.write("hola mamá!");

//Document es un objeto, y write es una funcion del objeto document

*/
var pi = 3.141592654;


//En este ejemplo me almacena el ultimo valor del numero pi (techo)
pi=Math.ceil(pi);

document.write(pi);

//En este ejemplo me almacena el primer valor del numero pi
pi=Math.floor(pi);

document.write(pi);

//Podemos explorar otras opciones del objero Math

var maxima;
//var numeros = [5,23,4,5,12,24,23,100];
//En este caso la funcion max del objeto Math, solo acepta como parametros
//numeros directamente, mas no un array como parametro ¬¬
maxima = Math.max(5,23,4,5,12,24,23,100);
document.write(maxima);

/*3 PRINCIPALES OBJETOS DE JAVASCRIPT
Son 
Navigator: Opciones del navegador,
 Window : Cosas de la ventana
 y Document: Cosas bonitas para interfaces

*/



function mostrar (pos)
{
document.write(pos.coords.latitude+","+pos.coords.longitude);
}

navigator.geolocation.getCurrentPosition( mostrar );