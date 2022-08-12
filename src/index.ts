import "./styles.css";

const p = document.querySelector("p");
const hayUnaPila: boolean = true;
//const hayUnaPila: boolean = false;
//esto escribe Llenar agujero
if (hayUnaPila === true) {
  p.textContent = "Quitar Pila";
} else if (hayUnaPila === false) {
  p.textContent = "Llenar el agujero";
}

/* esto que sigue funcion igual sin el else if 
ante un booleano no hace falta preguntar if si es falso
} else  {
  p.testContent = "Llenar el agujero"
}
*/

/// evluar el valor de una variable edad si es mayor a 65
///imprimir esta jubilado si es menor sigue trabajando
///si es igual a 65 esta en proceso
// aca tenemos 3 opciones no es booleano

const edad: number = 65;
//const edad: number = 65; (aca si cambio este valor constante 65
//por otras edades me va cambiando el retorno por console)
if (edad > 65) {
  console.log("Esta Jubilado");
} else if (edad < 65) {
  console.log("Sigue trabajando");
} else {
  console.log("En proceso de Jubilacion");
}
