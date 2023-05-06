let nombre = "Luis";
let edad = "25";

const porcentaje = 40;

//console.log("Porcentaje", porcentaje)

//la const no se le puede reasignar un nuevo valor

//el let no se puede usar fuera del bloque (por ej para llamar la funcion en el console log afuera)
//si se quiere usar el let hay que declararlo fuera del bloque y luego llamarlo en el bloque (ej: let apellido arriba y luego apellido = "xxxx" en el bloque)
if (true) {
    apellido = "Lopez"
    let edad = 30;
    //console.log("Edad bloque", edad)

    if(true) {
        //console.log(apellido);
    }
} else {

}

//console.log("Edad - raiz", edad)

//si comentamos la edad del bloque, se toma la edad que queda en la raíz si hacemos un console log en el bloque

//interpolación

//concatenación Tradicional
let saludo = "Hola" + " " + nombre + " " + apellido;

//Concatenación con interpolación (esta permite saltos de línea)
let saludo2 = `Hola ${nombre} ${apellido}
holi`



//let suma = `El resultado de la suma es: ${Number(n1) + Number(n2)}`

//let mensaje = `El resultado ${Number(n1) + Number(n2) > 20 ? 'sí' : 'no'} supera el número 20`

//console.log(mensaje)

//Funciones de flecha

//Definición de función con EcmaScript5
function sumar(num1, num2) {
    return num1 + num2
}

//Definición de funciones anónimas
const sumarAnonima = function(num1, num2){
    return num1 + num2
}
//Primera variante de función flecha
const sumarFlecha1 = (num1, num2) => {
    return num1 + num2
}

//Segunda variante de función flecha
const sumarFlecha2 = (num1, num2) => num1 + num2

//Tercera variante de función flecha con un parámetro
const saludar = nombre => console.log(`Hola ${nombre}`);

saludar("Juan Perez")

//Cuarta variante de función de flecha sin parámetro
const mostrarMensaje = () => console.log("Mensaje función sin parámetro");
mostrarMensaje()

let objetoFunciones = {
    sumarAnonima
}

var n1 = prompt("Ingresa el número 1")
var n2 = prompt("Ingresa el número 2")

console.log(`El resultado de la suma es: ${objetoFunciones.sumarAnonima(Number(n1), Number(n2))}`)