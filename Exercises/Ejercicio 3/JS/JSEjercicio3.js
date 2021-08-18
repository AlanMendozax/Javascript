/* Se crea la funcion suma*/
function Suma() {
	/* Se crean variables para los ID de HTML - num1 y num2*/
            var n1 = document.getElementById('num1').value;
            var n2 = document.getElementById('num2').value;

    /* Se crea la operación */     
            var suma = parseInt(n1) + parseInt(n2);
            
    /* Se pasa el resultado de la variable suma al ID res */
           document.getElementById('res').value = suma;
}