function Pokemon (n,v,a){
	this.grito= "pika!";
	this.nombre=n;
	this.vida=v;
	this.ataque=a;
	this.gritar = function()
	{
		alert(this.grito);
	}
}

function inicio()
{
	var ratata = new Pokemon ("Ratata",40,2);
	ratata.vida = ratata.vida-13;
	nombrePokemon.innerText = ratata.nombre;
	gritoPokemon.innerText = ratata.grito;
	vidaPokemon.innerText = ratata.vida;
	ataquePokemon.innerText = ratata.ataque;
}

var pikachu = new Pokemon("Pikachu",100,55);
pikachu.vida = pikachu.vida-10;
//Declaramos un objeto

/*
//Existe variables de asignacion por valor y por referencia
function Pokemon2(nombrePokemon,VidaPoke, ataPoke){
var estructuraPokemon =
{
nombre : nombrePokemon,
//tipo: "Electrico",
vida: VidaPoke,
ataque: ataPoke,
datos: {tipo:"Tierra",debilidad:"Fuego"}
};
return estructuraPokemon;
}

var pikachu = Pokemon("Pikachu",100,55);
var bulbasaur = Pokemon("Bulbasaur",90,50);
bulbasaur.nombre= "Bulbasaur",
bulbasaur.tipo="Tierra";
bulbasaur.vida=90;
bulbasaur.ataque=50;

//document.write(bulbasaur.datos.tipo);
console.log(bulbasaur);

*/