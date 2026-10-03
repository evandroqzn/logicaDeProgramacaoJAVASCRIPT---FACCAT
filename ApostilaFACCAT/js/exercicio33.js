/* Resultado:
• "Números iguais", caso os números sejam iguais.
• "Primeiro é maior", caso o primeiro seja maior que o segundo.
• "Segundo maior", caso o segundo seja maior que o primeiro. */

document.getElementById("exercicio33").addEventListener("click", function maiorNumero(){
    let numero01 = parseFloat(prompt("Digite o primeiro valor : "))
    let numero02 = parseFloat(prompt("Digite o segundo valor : "))

    if(numero01 == numero02){
        alert("Número iguais")
    } else if(numero01 > numero02){
        alert("Primerio é maior")
    } else {
        alert("Segundo maior")
    }
})