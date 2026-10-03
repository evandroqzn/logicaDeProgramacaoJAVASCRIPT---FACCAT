/* Uma fruteira está vendendo frutas com a seguinte tabela de preços:

Morango:
• Até 5 Kg: R$ 2,50 por Kg.
• Acima de 5 Kg: R$ 2,20 por Kg.

Maçã:
• Até 5 Kg: R$ 1,80 por Kg.
• Acima de 5 Kg: R$ 1,50 por Kg.

Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre o total.

Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maçãs adquiridas e escrever o valor a ser pago pelo cliente.

 */
document.getElementById("exercicio37").addEventListener("click", function hortifrut(){
    let valorFinal;
    let valorMacas;
    let valorMorango;
    let valorTotal;
    let desconto;
    let morangos = parseInt(prompt("Digite a quantidade de morangos em Kg:"))
    let macas = parseFloat(prompt("Digite a quantidade de maçãs em Kg:"))

    if(morangos <= 5){
        valorMorango = morangos * 2.50
    }else{
        valorMorango = morangos * 2.20
    }
    if(macas <= 5){
        valorMacas = macas * 1.80
    } else{
        valorMacas = macas * 1.50
    }
    valorTotal = valorMorango + valorMacas
    if(morangos + macas > 8 || valorTotal > 25){
        desconto = valorTotal * 0.10
    } else{ 
        desconto = 0
    }
    valorFinal = valorTotal - desconto
    console.log(`Valor dos morangos: R$ ${valorTotal}`)
    console.log(`valor das maçãs: R$ ${valorMacas}`)
    console.log(`Desconto: R$ ${desconto}`)
    console.log(`Valor final a pagar: R$ ${valorFinal}`)
})