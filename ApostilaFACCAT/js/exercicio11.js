/* Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, 
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele 
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas 
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do 
vendedor.  */

document.getElementById("exercicio11").addEventListener("click", function vendaCarros() {
    let salarioMensal = parseFloat(prompt("Digite o salário fixo mensal: R$ "))
    let carrosVendidos = parseInt(prompt("Digite quantos carros foram vendidos: "))
    let comissaFixa = parseFloat(prompt("Digite o valor da comissão por carro vendido: "))
    let valorVendas = parseFloat(prompt("Digite o valor total da vendas: R$ "))

    let salarioFinal = salarioMensal + (carrosVendidos * comissaFixa) + (valorVendas * 0.5)

       console.log("Programa Calculadora de Salário")
       console.log("--------------------------------")
       console.log("Salário fixo: R$ " + salarioMensal.toFixed(2))
       console.log("Carros vendidos: " + carrosVendidos)
       console.log("Comissão por carro: R$ " + comissaFixa.toFixed(2))
       console.log("Valor total das vendas: R$ " + valorVendas.toFixed(2))
       console.log("Comissão de 5% sobre as vendas: R$ " + (valorVendas * 0.05).toFixed(2))
       console.log("--------------------------------")
       console.log("SALÁRIO FINAL: R$ " + salarioFinal.toFixed(2))

})