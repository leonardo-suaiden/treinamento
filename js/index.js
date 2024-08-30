 import{Cliente}from "./Cliente.js"
 import{ContaCorrente}from "./ContaCorrente.js"

 const cliente2 = new Cliente ("Ricardo",11122233309);


const contacliente2 = new ContaCorrente();

    contacliente2.agencia = 1111;
    contacliente2.cliente = cliente2;
    contacliente2._saldo = 0;

const contacliente1 = new ContaCorrente(1111, cliente2);

contacliente2.depositar(30)
contacliente2.transferir(10, contacliente1)

console.log(ContaCorrente.numerodecontas);