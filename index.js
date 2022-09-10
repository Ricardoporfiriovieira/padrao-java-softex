//chamando e iniciando o express
const express = require('express');
const app = express();

const pessoa = require("./br.com.empresa.pessoa") //importando o pacote pessoa
const empresa = require("./br.com.empresa") //importando o pacote empresa

//criando as classes funcionario e fornecedor

class funcionario extends pessoa{ //recebendo os atributos da classe pessoa
    constructor(nome, idade, salario){
        super(nome, idade) //recebendo nome e idade da classe 'pessoa'
        this.salario = salario
    }
}

class fornecedor extends empresa{ // recebendo os atributos da classe empresa
    constructor(endereco, cnpj, entrega, nome_empresa){ 
        super(endereco, cnpj) //recebendo endereco e cnpj da classe 'empresa'
        this.entrega = entrega; this.nome_empresa = nome_empresa;
    }
}

//instanciando os objetos

let funcionario1 = new funcionario('joao', 24, 1000) 
let fornecedor1 = new fornecedor('avenida são paulo, SP', '3647223', false, 'distribuidora de bebidas jm')

//mostrando os objetos no console

console.log(funcionario1) 
console.log(fornecedor1)

//iniciando o servidor

app.listen(5000, (erro)=>{
    if(erro){
        console.log(erro)
    }else{
        'Servidor iniciado com sucesso!'
    }
})
