/* Funcion para saber si el valor es par o no*/
function par(){

/* Proceso para obtener valor par o impar */
var numero = document.getElementById ('valor').value; 
if(numero % 2 == 0) {
    document.getElementById ('par').value = " Si ";
  }
  else {
    document.getElementById ('par').value = " No, es impar ";    
  }
}

/* Funcion para saber si el valor es primo o no */
function esPrimo(num) {

  /* Proceso para obtener valor primo */
        if (num <= 1 || num % 1) {
            return false;
        }
        let m = Math.sqrt(num);
        for (let i = 2; i <= m; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }

 /* Condicion para arrojar mensaje si el valor es primo o no */
  function primo()
  {
    let valor = parseInt(document.getElementById("valor").value);
    if (esPrimo(valor)) {
      document.getElementById("primo").value= " Si ";

    } else {
      document.getElementById("primo").value = " No ";
        }
  }

/* Fuentes de apoyo */
/* https://www.lawebdelprogramador.com/codigo/JavaScript/3417-Determinar-si-un-numero-es-primo.html */
/* https://es.stackoverflow.com/questions/98287/numeros-primos-en-javascript */