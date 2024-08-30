export class Cliente {
    nome;
    _cpf;



    get getCPF(){
        return this._cpf;
    }
    

    constructor(nome, getCPF){
        this.nome = nome;
        this._cpf = getCPF;
    }
}  