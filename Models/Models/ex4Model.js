class Produto{
    constructor(codigo, nome, descricao, preco){
        this.codigo = codigo;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;

    }
}
class Pessoa{
    constructor(nome, CPF){
        this.nome = nome;
        this. CPF = CPF;
        
    }
}
class Vendedor extends Pessoa{
        constructor(nome, CPF, metaVendas){
            super(nome, CPF);
            this.metaVendas = metaVendas;

        }
        registrarPedido(){

        }
}
class Gerente extends Pessoa{
    constructor(nome, CPF, setorResponsavel){
        super(nome, CPF);
        this.setorResponsavel = setorResponsavel;
    }
}
class Cliente extends Pessoa{
    constructor(nome, CPF, telefone, endereco){
        super(nome, CPF);
        this.telefone = telefone;
        this.endereco = endereco;
    }
    realizarPedido(){

    }
}
class Pedido{
    constructor(data, status, numero){
        this.data = data;
        this.status = status;
        this.numero = numero;    
    }
}
class Pagamento{
    constructor(valor, data, formaPagamento){
        this.valor = valor;
        this.data = data;
        this.formaPagamento = formaPagamento;
    }
}