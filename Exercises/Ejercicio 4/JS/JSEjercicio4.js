/* Funcion que se encarga del evento click del boton */
window.onload = function(){
	document.getElementById("enviar").onclick = function(){
	Palindromo();
	}
}

/* Inicio de la funcion palindromo */
function Palindromo(){

/*Variables para text1 frase, cantidad, invertido*/
	var txt = document.getElementById ('text1').value;
 	var txtlgth = txt.length;
 	var txtinv = "";

	
/* Proceso para crear la confirmación si es palindromo o no */
	 while (txtlgth >= 0) {
    txtinv = txtinv + txt.charAt(txtlgth);
    txtlgth--;
  	}

	var txtog =  txt.replace(/ /g, "");
	var txtnw =  txtinv.replace(/ /g, "");

	if(txtog == txtnw) {
    document.getElementById ('siono').value = "Si es palindromo";
  	}
  	else {
    document.getElementById ('siono').value = "No es palindromo";
  	}


/* Contador de letras de Palindromo */
   var txt = document.getElementById('text1').value;
   var long = txt.length;
   document.getElementById('longitud').value = long;


 /* Insertar frase original */
document.getElementById('TO').value = txtog;

/* Insertar frase invertida */
document.getElementById('TI').value = txtnw;
}

/* Fuentes de apoyo */
/*https://byspel.com/palindromos-con-javascript/*/
/*https://www.lawebdelprogramador.com/foros/JavaScript/1631929-Palindromo.html*/