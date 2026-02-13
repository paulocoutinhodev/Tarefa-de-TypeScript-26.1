
//interface
interface Usuario {
  nome: string;
  email: string;
  exibirInfo(): string

}

//objeto
const usuario1: Usuario = {
  nome: "João",
  email: "joao@email.com",

  exibirInfo() {
    return `Nome: ${usuario1.nome} - Email: ${usuario1.email}`;
  }
};

console.log(usuario1.exibirInfo());

