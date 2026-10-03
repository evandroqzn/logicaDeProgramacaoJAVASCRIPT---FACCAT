// Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10!
document.getElementById("exercicio14").addEventListener("click", function numeroMaior() {
    let numero = parseInt(prompt("Digite um número: "))
    if (numero > 10) {
        alert("É MAIOR QUE 10!")
    } else if (numero < 10) {
        alert("NÃO É MAIOR QUE 10!")
    } else {
        alert("É IGUAL A 10!")
    }
})