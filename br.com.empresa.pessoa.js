
//criando a classe pessoa
class pessoa{
    constructor(nome, idade){
        this.nome = nome; this.idade = idade;
    }

    get mostraNome(){
        console.log(this.nome)
    }

    get mostraIdade(){
        console.log(this.idade)
    }
}

//exportando o pacote
module.exports = pessoa


