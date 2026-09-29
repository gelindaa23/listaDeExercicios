class Curso{
    constructor(nome, descricao, duracao, preco){
        this.nome = nome;
        this.descricao = descricao;
        this.duracao = duracao;
        this.preco = preco;
    }
}
class Modulos{
    constructor(titulo, descricao, ordemApresentacao){
        this.titulo = titulo;
        this.descricao = descricao;
        this.ordemApresentacao = ordemApresentacao;
    }
}
class Aula{
    constructor(titulo, duracao, conteudo){
        this.titulo = titulo;
        this.duracao = duracao;
        this.conteudo = conteudo;
    }
}
class Pessoa{
    constructor(nome, CPF){
        this.nome = nome;
        this.CPF = CPF;
    }
}
class Aluno extends Pessoa{
    constructor(nome, CPF, email, dataCadastro){
        super(nome, CPF);
        this.email = email;
        this.dataCadastro = dataCadastro;
    }
    fazerMatricula(){
        
    }
}
class Instrutor extends Pessoa{
    constructor(nome, CPF, especialidade){
        super(nome, CPF);
        this.especialidade = especialidade;
    }
}
class Administrador extends Pessoa{
    constructor(nome, CPF, setor){
        super(nome, CPF);
        this.setor = setor;
    }
}