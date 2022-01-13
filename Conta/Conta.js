//Classe abstrata

export class Conta{
    //
    constructor(saldoInicial, cliente , agencia){
        if (this.constructor === Conta){
            throw new Error("Instanciamento invalido, Classe Conta é abstrata")
        }
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
    }
    //Acessores
    set cliente(cliente){  
        if(cliente instanceof Cliente)
        this._cliente=cliente
    }

    get cliente(){
        return this._cliente
    }

    set agencia(agencia){
        this._agencia = agencia
    }

    get agencia(){
        return this._agencia
    }
    //Método Abstrato
    sacar(valor){
        throw new Error("O método Sacar da 'Conta' é abstrato")

    }
    _sacar(valor, taxa){

        if(this._saldo>=valor){
            this._saldo -= (valor * taxa)

            return this._saldo
        }

    }
    depositar(valor){
        if(valor>0){
            this._saldo += valor
            console.log(this._saldo)
        }
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }

}