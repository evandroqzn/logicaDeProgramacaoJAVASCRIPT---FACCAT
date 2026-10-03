/* As maçãs custam R$ 1, 30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra. */
document.getElementById("exercicio16").addEventListener("click", function calculoMacas() {
    let macas = parseInt(prompt("Quantas maçãs você deseja comprar?"))
    let precoMacas = 0
    if (macas < 12) {
         precoMacas = macas * 1.30
    } else {
        precoMacas = macas * 1
    }
    alert(`As maçãs custarão R$ ${precoMacas.toFixed(2)}.`)
})