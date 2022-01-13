import {
    Cliente
} from "./Cliente.js";
import {
    Diretor
} from "./Funcionario/Diretor.js";
import {
    Funcionario
} from "./Funcionario/Funcionario.js";
import {
    Gerente
} from "./Funcionario/Gerente.js";
import {
    SistemaAutenticacao
} from "./SistemaAutenticacao.js";

const gerente1 = new Gerente("Marcus", 5000, 12345678601)
gerente1.cadastrarSenha("senha")

const diretor1 = new Diretor("Rodrigo", 10000, 12345678900)
diretor1.cadastrarSenha("senha1")

const cliente = new Cliente("Joao", 12345678977, "senha3")

const gerenteEstaLogado = SistemaAutenticacao.login(gerente1, "senha")
const diretorEstaLogado = SistemaAutenticacao.login(diretor1, "senha2")
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "senha3")

console.log(gerenteEstaLogado)
console.log(diretorEstaLogado)
console.log(clienteEstaLogado)