// =====================
// INTERFACE
// =====================
interface IPessoa {
  nome: string;
  cpf: string;
  idade: number;
  contato?: string[];

  getNome(): string;
  setNome(nome: string): void;
  getContato(): string[];
  addContato(contato: string): string[];
}

// =====================
// CLASSE
// =====================
class Pessoa implements IPessoa {
  nome: string;
  cpf: string;
  idade: number;
  contato?: string[];

  constructor(nome: string, cpf: string, idade: number) {
    this.nome = nome;
    this.cpf = cpf;
    this.idade = idade;
  }

  getNome(): string {
    return this.nome;
  }

  setNome(nome: string): void {
    this.nome = nome;
  }

  getContato(): string[] {
    if (this.contato !== undefined) {
      return this.contato;
    } else {
      const vetor = [] as string[];
      return vetor;
    }
  }

  addContato(contato: string): string[] {
    if (this.contato !== undefined) {
      this.contato = this.contato.concat(contato);
    } else {
      this.contato = [contato];
    }

    return this.contato;
  }
}

// =====================
// USO DA CLASSE
// =====================
const pessoa = new Pessoa("José", "11111", 20);

pessoa.setNome("Fábio");
pessoa.addContato("99999-9999");
pessoa.addContato("88888-8888");

console.log(pessoa.getNome());
console.log(pessoa.getContato());
