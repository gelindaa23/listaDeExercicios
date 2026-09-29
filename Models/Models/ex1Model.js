class Livros{
    constructor(titulo, ISBN, anoPublicacao){
        this.titulo = titulo;
        this.ISBN = ISBN;
        this.anoPublicacao = anoPublicacao;
    }
    cadastrarLivro(){   

    }
    removerLivro(){

    }
    atualizarLivro(){

    }
    pesquisarLivro(){

    }
}
class Pessoa{
    constructor(nome, CPF){
        this.nome = nome;
        this.CPF = CPF;

    }
} 
class Usuario extends Pessoa{
    constructor(nome, CPF, matriculaUsuario){
        super(nome, CPF);
        this.matriculaUsuario = matriculaUsuario;
    }
    fazerEmprestimo(){

    }

}
class Funcionario extends Pessoa{
    constructor(nome, CPF, matriculaFuncional, cargo){
        super(nome, CPF);
        this.matriculaFuncional = matriculaFuncional;
        this.cargo = cargo;
    }

}