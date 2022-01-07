import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"




const cliente1 = new Cliente();
const ContaCorrenteCliente1 = new ContaCorrente();

cliente1.nome = "Ricardo";
cliente1.cpf = "11122233304";
ContaCorrenteCliente1.agencia = 1001;

const cliente2 = new Cliente();
const ContaCorrenteCliente2 = new ContaCorrente();

cliente2.nome = "Alice"
cliente2.cpf = "2223333304";
ContaCorrenteCliente2.agencia = 1001;

const cliente3 = new Cliente();
const conta3 = new ContaCorrente();
conta3.cliente = cliente3;

conta3.cliente.nome = 'Wellington';
cliente3.cpf = '666.666.666-06';
conta3.agencia = 103;

ContaCorrenteCliente2.deposito(200);

const sacar = ContaCorrenteCliente2.saque(20);

ContaCorrenteCliente2.deposito(100.00);

ContaCorrenteCliente2.cliente = cliente2;
ContaCorrenteCliente1.cliente = cliente1;

console.log(ContaCorrenteCliente2);
console.log(ContaCorrenteCliente1);


ContaCorrenteCliente2.transferencia(80, ContaCorrenteCliente1);
conta3.deposito(100000000000000000000);


console.log(ContaCorrenteCliente2);
console.log(ContaCorrenteCliente1);
console.log(conta3);
console.log(conta3._saldo);

