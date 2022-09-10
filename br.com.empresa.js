
//criando a classe empresa
class empresa{
    constructor(endereco, cnpj){
        this.endereco = endereco; this.cnpj = cnpj;
    }

    get mostraModelo(){
        console.log(this.endereco)
    }

    get mostraMarca(){
        console.log(this.cnpj)
    }
}
//exportando o pacote
module.exports = empresa