class Mesas{
    constructor(numero, capacidade, localizacao){
        this.numero = numero;
        this.capacidade = capacidade;
        this.localizacao = localizacao;

    }

}
class funcionario{
    constructor(nome, CPF, matricula){
        this.nome = nome;
        this.CPF = CPF;
        this.matricula = matricula;

    }
}
class Garcon extends Funcionario{

}
class Cozinheiro extends Funcionario{

}
class Pedidos{
    constructor(numero, data, valorTotal){
        this.numero = numero;
        this.data = data;
        this.valorTotal = valorTotal;
    }
}