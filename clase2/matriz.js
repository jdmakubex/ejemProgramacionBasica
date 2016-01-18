/*Ejercicio de Matrices*/

//alert("Listos para matricear");

/*
var menu = ["productos", "ventas", "Contactos"];
document.write(menu[0]);
*/

/*
var dafo = [ ["Fortaleza","Oportunidad"], ["Debilidades","Amenazas"] ];
document.write(dafo[1][1]);
*/
function explosion()
{
alert("Boom!");
document.write("<h1>BOOM! Elejiste un área minada :( </h1>");
}

function ganaste()
{
	document.write("\nEres un ganador :)");
}

//explosion();

// 1= Bomba.  0= No hay bomba
var campo = [ [1,0,0],
			  [0,1,1],
			  [1,1,1]];

var x, y;

var textos = ["Cesped", "Bomba"];

alert("Estas en un campo minado \n" + "Elije una posición entre el 0 y el 2 para X y para Y");

x = prompt("posición en X? (entre 0 y 2)");
y = prompt("Posición en Y? (entre 0 y 2)");

/*
var posicion = campo[x][y];
document.write(textos[posicion]);
*/

if(x <= 2 && y <= 2)
{
	var posicion = campo[x][y];
	document.write("Elejiste " + textos[posicion] + "<br/>");
	if (posicion==1)
	{
		explosion();
	}
	else
	{
		ganaste();
	}

}
else
{
	document.write("¡Te saliste del campo !");
	explosion();
}