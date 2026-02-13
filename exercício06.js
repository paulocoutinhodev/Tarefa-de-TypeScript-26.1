function retornarElemento(array, index) {
    return "O array [".concat(array, "] \n No index ").concat(index, " tem o elemento ").concat(array[index], " ");
}
// exemplo Number
var numero = retornarElemento([10, 20, 30], 1);
console.log(numero);
//exemplo  string 
var texto = retornarElemento(["a", "b", "c"], 2);
console.log(texto);
