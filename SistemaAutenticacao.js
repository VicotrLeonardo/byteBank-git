import {
    Cliente
} from "./Cliente.js";
import {
    Funcionario
} from "./Funcionario/Funcionario.js";

/*
Ser autenticavel significa ter a propriedade "Senha"

 
*/


export class SistemaAutenticacao {

    static login(autenticavel, senha) {
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        } else {
            return false
        }
    }

    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel &&
            autenticavel.autenticar instanceof Function
    }
}