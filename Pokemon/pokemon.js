//Tipo de variable
//Asignacion por valor
//Asignacion por referencia
/*
function Pokemon()
{
	var estructuraPokemon =
	{
		nombre : "Bulbasaur",
		vida : 100,
		ataque: 55,
		datos: {tipo: "Planta", debilidad: "Fuego"}
	};

	return estructuraPokemon;
}

var pikachu = Pokemon();
var bulbasaur = Pokemon();
bulbasaur.nombre = "Bulbasaur";
bulbasaur.vida = 90;

document.write(pikachu.nombre);
*/
//----------------------------------------------------//
//Funcion se ejecuta fuera del objeto
//Metodo se ejecuta dentro del objeto
//Variable fuera del objeto
//Atributo dentro del objeto
function aleatorio(minimo, maximo)
{
	var num = Math.floor(Math.random()*(maximo - minimo + 1) + minimo);
	return num;
}

function numeroPokemon(numero)
{	
	var nombre="";

	if(numero=="001")
		nombre="Bulbasaur";
	if(numero=="002")
		nombre="Ivysaur";
	if(numero=="003")
		nombre="Venusaur";
	if(numero=="004")
		nombre="Charmander";
	if(numero=="005")
		nombre="Charmeleon";
	if(numero=="006")
		nombre="Charizard";
	if(numero=="007")
		nombre="Squirtle";
	if(numero=="008")
		nombre="Wartortle";
	if(numero=="009")
		nombre="Blastoise";
	if(numero=="010")
		nombre="Caterpie";
	if(numero=="011")
		nombre="Metapod";
	if(numero=="012")
		nombre="Butterfree";
	if(numero=="013")
		nombre="Weedle";
	if(numero=="014")
		nombre="Kakuna";
	if(numero=="015")
		nombre="Beedrill";
	if(numero=="016")
		nombre="Pidgey";
	if(numero=="017")
		nombre="Pidgeotto";
	if(numero=="018")
		nombre="Pidgeot";
	if(numero=="019")
		nombre="Rattata";
	if(numero=="020")
		nombre="Raticate";	

	return nombre;
}

function Pokemon(n,v,a)
{
	
	
	this.nombre = numeroPokemon(n);
	this.vida = v;
	this.ataque = a;
	this.foto = "http://assets2.pokemon.com/assets/cms2/img/pokedex/detail/" + n + ".png";
	this.grito = this.nombre.substring(0,3);
	this.gritar = function()
	{
		alert(this.grito);
	}
}

function inicio()
{	
	num = document.getElementById("num");
	var pkmn = new Pokemon(num.value, aleatorio(1,100), aleatorio(1,100));
	//pkmn.vida -= 13;
	//Usamos el Id directamente
	nombrePokemon.innerText = pkmn.nombre;
	datosPokemon.innerText = "Vida: " + pkmn.vida + "\n"
							+ "Ataque: " + pkmn.ataque + "\n"
							+ "Grito: " + pkmn.grito;
	idfoto.src = pkmn.foto;

}
