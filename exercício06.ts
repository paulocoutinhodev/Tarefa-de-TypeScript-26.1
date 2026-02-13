

function retornarElemento<T>(array: T[], index: number): string | undefined {

  return `O array [${array}] \n No index ${index} tem o elemento ${array[index]} `;
}




// exemplo Number
const numero = retornarElemento([10, 20, 30], 1);
console.log(numero)

//exemplo  string 
const texto = retornarElemento(["a", "b", "c"], 2);
console.log(texto)
