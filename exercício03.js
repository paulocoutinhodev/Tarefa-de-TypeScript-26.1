// function resumirLivro(livro: Livro): string {
//   return `O livro '${livro.titulo}' foi escrito por ${livro.autor} em ${livro.anoPublicacao}.`;
// }
var livro1 = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899,
};
function resumirLivro(livro) {
    return console.log("O livro " + livro.titulo + " foi escrito por " + livro.autor + "em" + livro.anoPublicacao + ".");
}
resumirLivro(livro1);
