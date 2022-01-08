export class Conta {  // classe abstrata, nunca pode ser instanciada, só pode ser herdada
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error('Você não deve instanciar um objeto do tipo Conta diretamente.');  
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        
    }

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
            console.log(`${this._cliente.nome}, você depositou R$:${valor.toFixed(2)} \tSeu saldo atual: R$:${this._saldo.toFixed(2)}`);
        }else{
            console.log("Algo deu errado com seu depósito, tente novamente !");
        }
    }
    saque(valor){
        let taxa = 1;
        return this._saque(valor, taxa);        
    }

    _saque(valor, taxa){
        const valorSacado = valor * taxa;
        if(valorSacado <= this._saldo){
            this._saldo -= valorSacado;
            console.log(`${this._cliente.nome}, você sacou R$:${valor.toFixed(2)}. \tSeu saldo atual: R$:${this._saldo.toFixed(2)} Valor Cobrado R$:` + (valorSacado - valor).toFixed(2) )
            return valorSacado;
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