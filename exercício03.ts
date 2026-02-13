interface Livro{
     titulo: string;
     autor:string
     anoPublicacao:number
     


}

 

// Objeto
const livro1: Livro = {
 titulo: "Dom Casmurro",
   autor: "Machado de Assis",
   anoPublicacao: 1899,

   
   
 };



 function resumirLivro (livro:Livro)  {
    return console.log("O livro "+livro.titulo+" foi escrito por "+livro.autor+"em"+livro.anoPublicacao+".")}

 resumirLivro (livro1)  
