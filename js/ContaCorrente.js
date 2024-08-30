import{Cliente}from "./Cliente.js"
export class ContaCorrente {
    agencia;
    _saldo = 0;
    _cliente = 0;
    static numerodecontas = 0;


    set setCliente(novoValor){
        if(novoValor instanceof Cliente){
        this._cliente = novoValor;
        }
    }
    get getCliente(){
        return this._cliente;
    }

    get getSaldo(){
        return this._saldo;
    }


    constructor(agencia, getCliente){
        this._agencia = agencia;
        this._cliente = getCliente;
        ContaCorrente.numerodecontas += 1;
    }


    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor){
        if(valor >0){
            this._saldo += valor;
            return valor;
        }
    }
    transferir(valor, conta){
        if(this._saldo >= valor){
            const valorsacado = this.sacar(valor);
            conta._saldo += valorsacado;
        }
    }
}  