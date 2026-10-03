// Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.

document.getElementById("exercicio25").addEventListener("click", function verificarSaldo(){
    let saldoAtual;
    let conta = prompt("Digite o número da sua conta :")
    let saldo = parseFloat(prompt("Digite o saldo atual : "))
    let debito = parseFloat(prompt("Digite o debito : "))
    let credito = parseFloat(prompt("Digite o crédito :"))

    saldoAtual = saldo - debito + credito

    if (saldoAtual >= 0){
        console.log(`Informações do cliente conta ${conta} : ,`)
        console.log(`SALDO : R$ ${saldoAtual.toFixed(2)}`)
        console.log("O saldo atual é positivo")
    } else{
        console.log(`Informações do cliente conta ${conta} : ,`)
        console.log(`SALDO : R$ ${saldoAtual.toFixed(2)}`)
        console.log("O saldo atual é negativo")
    }
})