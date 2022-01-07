import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;


    _cliente;
    _saldo = 0;
    // usar ##  para privado, nao sei se foi aprovado, ou por convençao para todos saberem o _saldo underline

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }

    }

    get cliente() {
        return this._cliente;
    }


    get saldo() { // isso impede do valor ser atribuido fora da funcao, sem o set
        return this._saldo;
    }

    deposito(valor){
        if(valor > 0){
            this._saldo += valor;
            console.log(`Você depositou R$:${valor} \tSeu saldo atual: R$:${this._saldo}`);
        }else{
            console.log("Algo deu errado com seu depósito, tente novamente !");
        }
    }
    saque(valor){
        if(valor <= this._saldo){
            this._saldo -= valor;
            console.log(`Você sacou R$:${valor} \tSeu saldo atual: R$:${this._saldo}`)
            return valor;
        }else{
            console.log("Não tem saldo suficiente para saque!")
        }
    }
    transferencia(valor, conta){
        if(valor <= this._saldo){
            this.saque(valor);
            conta.deposito(valor);
        }
    }
    
}