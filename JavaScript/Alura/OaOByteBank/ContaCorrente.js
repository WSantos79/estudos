import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    // usar ##  para privado, nao sei se foi aprovado, ou por convençao para todos saberem o _saldo underline    

    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }
    // @Override
    saque(valor){     
       let taxa = 1.1;
       return super._saque(valor, taxa);        
    }
}