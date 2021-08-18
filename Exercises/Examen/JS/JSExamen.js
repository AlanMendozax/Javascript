/* Funcion para controlar evento click para hacer las conversiones */
window.onload = function() {
	document.getElementById("enviar").onclick = function(){
		cambio();
	}
}
function cambio()
{	
	/* Se declaran las variables de importe, cantidad, opcion 1 y 2 */ 
	var imp = document.getElementById('importe').value; 
	var op1 = document.getElementById('de').value;
	var op2 = document.getElementById('a').value;
	var cant;

	/* Se toman los valores de "op1" y "op2" */
	document.getElementById('de').value = op1;
	document.getElementById('a').value = op2;

	/* Condiciones con las que se logran hacer las conversiones */
	/* Pesos mexicanos a otras monedas */
	if (op1 == "Pesos" && op2 == "Dolar"){
		cant = imp * 0.043;
	} else if (op1 == "Pesos" && op2 == "Euros"){
		cant = imp * 0.038;
	} else if (op1 == "Pesos" && op2 == "LibraE"){
		cant = imp * 0.67;
	} else if (op1 == "Pesos" && op2 == "Chileno"){
		cant = imp * 35.51;
	} else if (op1 == "Pesos" && op2 == "YenJapones"){
		cant = imp * 4.61;
	} else if (op1 == "Pesos" && op2 == "Soles"){
		cant = imp * .15;
	} 

	/* Dolar a otras monedas */
	else if (op1 == "Dolar" && op2 == "Pesos"){
		cant = imp * 23.39;
	}else if (op1 == "Dolar" && op2 == "Euros"){
		cant = imp * .90;
	}else if (op1 == "Dolar" && op2 == "LibraE"){
		cant = imp * 15.17;
	}else if (op1 == "Dolar" && op2 == "Chileno"){
		cant = imp * 830.60;
	}else if (op1 == "Dolar" && op2 == "YenJapones"){
		cant = imp * 107.92;
	}else if (op1 == "Dolar" && op2 == "Soles"){
		cant = imp * 3.42;
	}

	/* Euros a otras monedas */
	else if (op1 == "Euros" && op2 == "Pesos"){
		cant = imp * 26.12;
	}else if (op1 == "Euros" && op2 == "Dolar"){
		cant = imp * 1.12;
	}else if (op1 == "Euros" && op2 == "LibraE"){
		cant = imp * 17.54;
	}else if (op1 == "Euros" && op2 == "Chileno"){
		cant = imp * 927.65;
	}else if (op1 == "Euros" && op2 == "YenJapones"){
		cant = imp * 120.52;
	}else if (op1 == "Euros" && op2 == "Soles"){
		cant = imp * 3.81;
	}

	/* Libras Egipcias a otras monedas */
	else if (op1 == "LibraE" && op2 == "Pesos"){
		cant = imp * 1.49;
	}else if (op1 == "LibraE" && op2 == "Dolar"){
		cant = imp * .064;
	}else if (op1 == "LibraE" && op2 == "Euros"){
		cant = imp * .057;
	}else if (op1 == "LibraE" && op2 == "Chileno"){
		cant = imp * 52.89;
	}else if (op1 == "LibraE" && op2 == "YenJapones"){
		cant = imp * 6.87;
	}else if (op1 == "LibraE" && op2 == "Soles"){
		cant = imp * .22;
	}

	/* Peso Chileno a otras monedas*/
	else if (op1 == "Chileno" && op2 == "Pesos"){
		cant = imp * 0.028;
	}else if (op1 == "Chileno" && op2 == "Dolar"){
		cant = imp * .0012;
	}else if (op1 == "Chileno" && op2 == "Euros"){
		cant = imp * .0011;
	}else if (op1 == "Chileno" && op2 == "LibraE"){
		cant = imp * 0.019;
	}else if (op1 == "Chileno" && op2 == "YenJapones"){
		cant = imp * 0.13;
	}else if (op1 == "Chileno" && op2 == "Soles"){
		cant = imp * .0041;
	}

	/* Yen Japones a otras monedas */
	else if (op1 == "YenJapones" && op2 == "Pesos"){
		cant = imp * .22;
	}else if (op1 == "YenJapones" && op2 == "Dolar"){
		cant = imp * .0093;
	}else if (op1 == "YenJapones" && op2 == "Euros"){
		cant = imp * .0083;
	}else if (op1 == "YenJapones" && op2 == "LibraE"){
		cant = imp * 0.15;
	}else if (op1 == "YenJapones" && op2 == "Chileno"){
		cant = imp * 7.7;
	}else if (op1 == "YenJapones" && op2 == "Soles"){
		cant = imp * .032;
	}

	/* Soles Peruanos a otras monedas */
	else if (op1 == "Soles" && op2 == "Pesos"){
		cant = imp * 6.87;
	}else if (op1 == "Soles" && op2 == "Dolar"){
		cant = imp * 0.29;
	}else if (op1 == "Soles" && op2 == "Euros"){
		cant = imp * 0.26;
	}else if (op1 == "Soles" && op2 == "LibraE"){
		cant = imp * 4.61;
	}else if (op1 == "Soles" && op2 == "Chileno"){
		cant = imp * 243.79;
	}else if (op1 == "Soles" && op2 == "YenJapones"){
		cant = imp * 31.67;
	}

	/*Si no cumplen esas codiciones entonces significa que no se eligieron una de las opciones o las dos, por lo que
	el importe seguira siendo el mismo valor*/
	else{
		cant = imp;	
	}

	/*Ya que una de las condiciones se haya complido se manda el resultado de "cant" al textbox "Cantidad"*/
	document.getElementById('cantidad').value = cant;	
}