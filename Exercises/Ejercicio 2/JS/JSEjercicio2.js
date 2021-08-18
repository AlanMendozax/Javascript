/* Funcion factorial */
function factorial (){
	/* Declaracion de variables, para el factorial y for */
	var fact = 1;
	var i;
	/* Numb es el id del Input donde ingresamos nuestro numero, aqui se arrastra y se valua */
	for (i = 1; i <= document.getElementById('Numb').value; i++)
	{
		fact *= i;
	}
	/* Resultado es el id del Input donde nos mostrara el valor fac*/
	document.getElementById('resultado').value = fact;
}