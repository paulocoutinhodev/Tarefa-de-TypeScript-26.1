// Interface genérica
interface RespostaAPI<T> {
  dados: T;
  sucesso: boolean;
}

// exemplo 1
const obj1: RespostaAPI<string> = {
  dados: "OK",
  sucesso: true
};

// exemplo2
const obj2: RespostaAPI<number[]> = {
  dados: [0, 9, 8],
  sucesso: false
};

console.log(obj1);
console.log(obj2);
