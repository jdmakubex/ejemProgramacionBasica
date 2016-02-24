//Correr este ejemplo con NodeJs
var pepito="Oaxaca";
//Simulanod una base de datos con un json
var bd = {
	usuario: "jd",
	pass: "123456"
};


/*
Para que corra bien esto... debemos instalar las siguientes dependencias con npm install
express
body-parser
 */

/*
Tarea Explorar Jade, es un alibrería especializada en comprimir html, css, y otros archivos estáticos , los empaqueta y los envía para visualizarlos
 */
console.log("Arrancando server de Node");

var express = require("express");
var web = express();
var servidor;

var parcero = require("body-parser");
web.use( parcero.urlencoded({extended:true}) );

servidor = web.listen(8080,function(){

	console.log("Servidor Arrancado :D");
});
/*
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//Ejemplos con GET
//Pruebas de URL's amigables
 
//Requerimiento es lo que me pide el Navegador --> req
//Respuesta es lo que envía el servidor -->response
 

web.get("/test",function(req,res){
	res.send("Tu avion es el " + req.query.avion + " Tu edad es "+ req.query.edad);
	//Los parametros pasador por get, quedan en un sub ojeto llamado query, y desde ahí
	//podemos cacharlos y manipularlos o mostrarlos.
	//Probemos la url con los siguientes parametros: http://localhost:8080/test?avion=airbus&edad=28
});

web.get("/hola/mama-es-linda",function(req,res){
	res.send("Hola <strong> mamá </strong> estoy triunfando");
});

*/

/*Ejemplo de un  loguin con post*/
web.get("/", function(req,res){
	//De esta manera enviamos un HTML como respuesta hacia el servidor
	res.sendfile("formulario.html");
});

web.post("/entrar",function(req,res){
	//En req.body podemos encontrar los parametros que pasamos por el metodo POST, para manipularlos o mostrarlos
	//console.log(req.body);
	if (req.body.usuario==bd.usuario && req.body.clave == bd.pass){
	res.send("Entraste al formulario secreto");
	}
	else
	{
		res.send("Acceso denegado shu shu shu!! ");
	}
});