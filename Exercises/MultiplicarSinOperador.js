//Declaracion de argumentos o numeros a multilicar
const multiply = (a,b) => {
    //Declaracion de variable resultado, inicializada en cero
    let resultado = 0
    //Se identifica si el valor de B es negativo o positivo
    const positivo = Math.abs(b) == b
    //Inicio de bucle en donde B es la cantidad de veces en las que A sera multiplicado
    for(i = 0; i < Math.abs(b); i++){
        //Se pregunta si el valor de B es negativo o postivo para realizar operacion de suma o resta
        resultado = positivo ? resultado + a : resultado - a
    }
    return resultado
}

//Ingresar valores de A y B, se manda llamar la funcion
const a = multiply(23,4)
// Se manda imprimir resutado
console.log(a)
