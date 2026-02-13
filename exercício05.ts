type Genero = "masculino" |"feminino";
interface Pessoa{
  nome :string; 
  idade: number ; 
  genero :Genero;
}


const pessoa1:Pessoa={
  nome :"Maria",
  idade: 30 , 
  genero :"feminino"

}

function apresentarPessoa(pessoa: Pessoa): string {
  return `${pessoa.nome} tem ${pessoa.idade} anos e se identifica como ${pessoa.genero}`;
}
