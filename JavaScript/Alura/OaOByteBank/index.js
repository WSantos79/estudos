import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const cliente1 = new Cliente("Ricardo", 11122233304);
const conta1 = new ContaCorrente(cliente1, 1001);

const cliente2 = new Cliente('Alice', 2223333304);
const conta2 = new ContaCorrente(cliente2, 1001);
const conta2P = new ContaPoupanca(1000, cliente2, 1003);

const cliente3 = new Cliente('Wellington', '666.666.666-06');
const conta3 = new ContaCorrente(cliente3, 103);
const conta3P = new ContaPoupanca(999999999999999, cliente3, 103)

conta2.deposito(200);

conta2.saque(20);

conta2.deposito(100.00);



conta2.transferencia(80, conta1);
conta3.deposito(100000000000000000000);

console.log(conta3);
console.table(conta3P);


console.log(conta2);
console.log(conta1);
//console.log(conta3);
//console.log(conta3._saldo);

conta2.deposito(10);
console.table(conta2);



//conta2.transferencia(100, conta1);
conta2.saque(100);


console.log(ContaCorrente.numeroDeContas);


const contaSalario = new ContaSalario(cliente1);
contaSalario.deposito(300);
contaSalario.saque(100);

console.log(contaSalario);

const gerente = new Gerente('Well', 5000, 111222333444);
const diretor = new Diretor('Well', 5000, 111222333444);
diretor.cadastrarSenha(1234);

const estalogado = SistemaAutenticacao.login(diretor, "1234");

const cliente4 = new Cliente("Zé", 22222222202, "4321");

const clientelogado = SistemaAutenticacao.login(cliente4, "4321");



console.log(estalogado, clientelogado);