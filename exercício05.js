var pessoa1 = {
    nome: "Maria",
    idade: 30,
    genero: "feminino"
};
function apresentarPessoa(pessoa) {
    return "".concat(pessoa.nome, " tem ").concat(pessoa.idade, " anos e se identifica como ").concat(pessoa.genero);
}
