import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0
    //
    constructor(saldo, cliente, agencia){
        super(saldo,cliente, agencia)
        ContaCorrente.numeroDeContas+=1
    }

    sacar(valor){
        taxa = 1.1
        super._sacar(valor, taxa)

    }

}