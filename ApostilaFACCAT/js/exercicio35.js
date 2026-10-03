/* Um posto está vendendo combustíveis com a seguinte tabela de descontos:

Álcool:
• Até 20 litros: desconto de 3% por litro.
• Acima de 20 litros: desconto de 5% por litro.

Gasolina:
• Até 20 litros: desconto de 4% por litro.
• Acima de 20 litros: desconto de 6% por litro.

Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da seguinte forma: A - Álcool e G - Gasolina). Calcule e imprima o valor a ser pago pelo cliente.

Preços:
• Gasolina: R$ 3,30 por litro.
• Álcool: R$ 2,90 por litro. */

document.getElementById("exercicio35").addEventListener("click", function postoCombustivel() {
    let desconto;
    let valor;
    let valorFinal;
    let litros = parseFloat(prompt("Digite a quantidade de listros para abastecer: "))
    let combustivel = prompt("Digite o tipo de combutivel - [A] para Álcool ou [G] para Gasolina ")
    if (combustivel == "A") {
        valor = litros * 2.90
        if (litros <= 20) {
            desconto = valor * 0.03
        } else {
            desconto = valor * 0.06
        }
    }
    valorFinal = valor - desconto
    alert(`Valor a pagar: R$ ${valorFinal}`)
})