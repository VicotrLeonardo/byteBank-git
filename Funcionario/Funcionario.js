export class Funcionario {
    constructor(nome, salario, cpf) {
        // if(this.constructor===Funcionario){throw new console.error("Funcionario é uma classe abstrata e não pode ser inicializada");}
        this._nome = nome
        this._salario = salario
        this._cpf = cpf
        this._bonificacao=1.0
        this._senha
    }
    //Acessores
    

    //
    cadastrarSenha(senha){
        this._senha = senha
    }
    autenticar(senha){
        return (this._senha === senha)
    }

}