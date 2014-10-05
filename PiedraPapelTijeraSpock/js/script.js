//Funcion que retorna un numero aleatorio en el rango especificado
function aleatorio(minimo, maximo)
{
	var numero = Math.floor(Math.random()*(maximo - minimo + 1) + minimo);
	return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock =4;

var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
var opcionUsuario;
var opcionMaquina = aleatorio(0,4);

opcionUsuario = prompt("Que eliges \n Piedra (0) \n Papel (1) \n Tijera (2) \n Lagarto (3) \n Spock (4)");

alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligió " + opciones[opcionMaquina]);

if(opcionUsuario!="")
{
	if(opcionUsuario == piedra)
	{
		if(opcionMaquina == piedra)
		{
			alert("Empate");
		}
		else if(opcionMaquina == papel)
		{
			alert("Perdiste!");
		}
		else if(opcionMaquina == tijera)
		{
			alert("Ganaste");
		}
		else if(opcionMaquina == lagarto)
		{
			alert("Ganaste");
		}
		else if(opcionMaquina == spock)
		{
			alert("Perdiste!");
		}
	}
	else if(opcionUsuario == papel)
	{
		
		if(opcionMaquina == piedra)
		{
			alert("Ganaste!");
		}
		else if(opcionMaquina == papel)
		{
			alert("Empate");
		}
		else if(opcionMaquina == tijera)
		{
			alert("Perdiste");
		}
		else if(opcionMaquina == lagarto)
		{
			alert("Perdiste");
		}
		else if(opcionMaquina == spock)
		{
			alert("Ganaste");
		}
	}
	else if(opcionUsuario == tijera)
	{
		
		if(opcionMaquina == piedra)
		{
			alert("Perdiste!");
		}
		else if(opcionMaquina == papel)
		{
			alert("Ganaste");
		}
		else if(opcionMaquina == tijera)
		{
			alert("Empate");
		}
		else if(opcionMaquina ==lagarto)
		{
			alert("Ganaste");
		}
		else if(opcionMaquina == spock)
		{
			alert("Perdiste");
		}
	}
	else if(opcionUsuario == lagarto)
	{
		
		if(opcionMaquina == piedra)
		{
			alert("Perdiste!");
		}
		else if(opcionMaquina == papel)
		{
			alert("Ganaste");
		}
		else if(opcionMaquina == tijera)
		{
			alert("Perdiste");
		}
		else if(opcionMaquina ==lagarto)
		{
			alert("Empate");
		}
		else if(opcionMaquina == spock)
		{
			alert("Ganaste");
		}
	}
	else if(opcionUsuario == spock)
	{
		
		if(opcionMaquina == piedra)
		{
			alert("Ganaste!");
		}
		else if(opcionMaquina == papel)
		{
			alert("Perdiste");
		}
		else if(opcionMaquina == tijera)
		{
			alert("Ganaste");
		}
		else if(opcionMaquina ==lagarto)
		{
			alert("Perdiste");
		}
		else if(opcionMaquina == spock)
		{
			alert("Empate");
		}
	}
	else
	{
		alert("What the fuck!");
	}
}
else
	alert("What the hell!");
