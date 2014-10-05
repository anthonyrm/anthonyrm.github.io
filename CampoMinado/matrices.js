//var menu =["Productos","Ventas","Contacto"];
//document.write(menu[2]);
//var dofa = [["Fortaleza","Oportunidades"],["Debilidades", "Amenazas"]];
//document.write(dofa[0][1]);
var texto = ["cesped", "bomba"];

function aleatorio(minimo, maximo)
{
	var num = Math.floor(Math.random()*(maximo - minimo + 1) + minimo);
	return num;
}

function explosion()
{
	alert("BOOM!");
	comentario.innerText = "Elegiste campo minado! :'(";
}

function ganaste()	
{
	comentario.innerText ="Eres un ganador";
}

function actualizarCampo(x,y,p)
{
	
	if(x==0 && y==0)
		c1.innerText = texto[p];
	if(x==0 && y==1)
		c2.innerText = texto[p];
	if(x==0 && y==2)
		c3.innerText = texto[p];

	if(x==1 && y==0)
		c4.innerText = texto[p];
	if(x==1 && y==1)
		c5.innerText = texto[p];
	if(x==1 && y==2)
		c6.innerText = texto[p];

	if(x==2 && y==0)
		c7.innerText = texto[p];
	if(x==2 && y==1)
		c8.innerText = texto[p];
	if(x==2 && y==2)
		c9.innerText = texto[p];
}

function inicio()
{
	//1 = Bomba
	//0 = No hay Bomba
	var campo = [
					[aleatorio(0,1),aleatorio(0,1), aleatorio(0,1)],
					[aleatorio(0,1), aleatorio(0,1), aleatorio(0,1)],
					[aleatorio(0,1), aleatorio(0,1), aleatorio(0,1)]
				];

	
	var x,y;
	var flag=true;

	while(flag)
	{
		alert("Estás en un campo minado.\nElige una posición entre 0 y 2 para X y para Y");
		x= prompt("Ingresa dato para X");
		y = prompt("Ingresa dato par Y");

		
		if((x<=2 && x>=0) && (y<=2 && y>=0))
		{
			var posicion = campo[x][y];

			if(posicion == 0)
			{
				ganaste();
			}
			else
			{
				explosion();
				flag= false;
			}

			actualizarCampo(x,y,posicion);
		}
		else
		{
			comentario.innerText = "Te saliste del campo";
			explosion();
			flag= false;
		}

		
	}
	

}