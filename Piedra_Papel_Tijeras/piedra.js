//Genera un numero aleatorio entre un rango de enteros
function aleatorio(minimo,maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

var piedra = 0;
var papel = 1;
var tijeras = 2;

var opciones = ["Piedra", "Papel", "Tijera"];

var opcionusuario;
var opcionMaquina = aleatorio(0,2);

 opcionusuario = prompt("Qué elijes \nPiedra : 0 \nPapel : 1 \n Tijera : 2",0);

 alert("Elejiste " + opciones[opcionusuario]);
 alert("JavaScript eligió " + opciones[opcionMaquina]);

 if (opcionusuario == piedra)
 {
 	//alert("Elejiste Piedra!");
 	if (opcionMaquina == papel)
 	{
 		alert("Perdiste");
 	}
 	else if (opcionMaquina == tijeras)
 	{
 		alert("Ganaste");
 	}
 	else if (opcionMaquina == piedra)
 	{
 		alert("Empate");
 	}
 }
 

 else if (opcionusuario == papel)
 {
 	//alert("Elejiste Papel");
 	if (opcionMaquina == papel)
 	{
 		alert("Empate");
 	}
 	else if (opcionMaquina == tijeras)
 	{
 		alert("Perdiste");
 	}
 	else if (opcionMaquina == piedra)
 	{
 		alert("Ganaste");
 	}
 }

 else if (opcionusuario == tijeras)
 {
 		//alert("Elejiste Tijeras");
 		if (opcionMaquina == papel)
 	{
 		alert("Ganaste");
 	}
 	else if (opcionMaquina == tijeras)
 	{
 		alert("Empate");
 	}
 	else if (opcionMaquina == piedra)
 	{
 		alert("Perdiste");
 	}
 }

