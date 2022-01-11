import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {

    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);       
    }
    seque(valor){
        const taxa = 1.02
        return this._saque(valor, taxa);

    }
}