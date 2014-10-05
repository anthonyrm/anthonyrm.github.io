var dibujo, lienzo;

function inicio()
{
	dibujo = document.getElementById("dibujito");
	//Obtengo el contexto
	lienzo = dibujo.getContext("2d");

	//dibujarGrilla(lienzo);
	dibujarGrillaDiagonal(lienzo);
	lienzo.beginPath();
	lienzo.strokeStyle = "#00F";
	lienzo.fillStyle ="#00F";
	lienzo.arc(150,150,100,Math.PI*2,false);
	lienzo.closePath();
	lienzo.stroke();
	lienzo.fill();

}

function dibujarGrillaDiagonal(l)
{
	var ancho = 300, alto=300;
	var linea;
	var anchoLinea = 30;
	var limiteX = ancho / anchoLinea;
	var limiteY = alto / anchoLinea;

	l.strokeStyle = "#AAA";


//Diagonal A
	for(linea = 0; linea <= limiteX; linea++)
	{
		punto = linea*anchoLinea;
		l.beginPath();
		l.moveTo(punto,0);
		l.lineTo(alto, alto-punto);
		l.stroke();
		l.closePath();

	}

	for(linea = 0; linea <= limiteY; linea++)
	{
		punto = linea * anchoLinea;
		l.beginPath();		
		l.moveTo(0,punto);
		l.lineTo(alto-punto, alto);
		l.stroke();
		l.closePath();		
	}
//Diagonal B

	for(linea = 0; linea <= limiteX; linea++)
	{
		punto = linea*anchoLinea;
		l.beginPath();
		l.moveTo(ancho,punto);
		l.lineTo(punto, alto);
		l.stroke();
		l.closePath();

	}

	for(linea = 0; linea <= limiteY; linea++)
	{
		punto = linea * anchoLinea;
		l.beginPath();		
		l.moveTo(0,punto);
		l.lineTo(punto, 0);
		l.stroke();
		l.closePath();		
	}

}

function dibujarGrilla(l)
{
	var ancho = 300, alto=300;
	var linea;
	var anchoLinea = 30;
	var limiteX = ancho / anchoLinea;
	var limiteY = alto / anchoLinea;

	l.strokeStyle = "#AAA";

	for(linea = 0; linea <= limiteX; linea++)
	{
		punto = linea*anchoLinea;
		l.beginPath();
		l.moveTo(punto,0);
		l.lineTo(punto, alto);
		l.stroke();
		l.closePath();

	}

	for(linea = 0; linea <= limiteY; linea++)
	{
		punto = linea * anchoLinea;
		l.beginPath();		
		l.moveTo(0,punto);
		l.lineTo(ancho, punto);
		l.stroke();
		l.closePath();		
	}

}
