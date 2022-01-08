import {Cliente} from "./Cliente.js"
import { Conta } from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";


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


const contax = new Conta(0, cliente1, 1001);
console.log(contax);