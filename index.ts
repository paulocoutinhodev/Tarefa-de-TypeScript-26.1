
interface IProduto {
  nome: string;
  preco: number;
  quantidade: number;
  disponivel: boolean;
  desconto?: number;
  categoria: ICategoria;
  calcularDesconto: (desconto: number) => number;
}
interface ICategoria {
  nome: 'Limpeza' | 'Alimento' | 'Vestuario';
}
