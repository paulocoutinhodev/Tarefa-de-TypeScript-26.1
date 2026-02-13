//objeto
var usuario1 = {
    nome: "João",
    email: "joao@email.com",
    exibirInfo: function () {
        return "Nome: ".concat(usuario1.nome, " - Email: ").concat(usuario1.email);
    }
};
console.log(usuario1.exibirInfo());
