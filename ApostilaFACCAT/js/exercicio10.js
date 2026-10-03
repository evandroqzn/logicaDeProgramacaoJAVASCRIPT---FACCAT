// Calcula o custo final do carro somando as porcentagens
document.getElementById("exercicio10").addEventListener("click", function calculoCustoCarro() {
    let custoDeFabrica = parseFloat(prompt("Digite o valor de fábrica do carro : "))
    let imposto = parseFloat(prompt("Digite o percentual de imposto : "))
    let percentualDistribuidor = parseFloat(prompt("Digite o percentual do distribuidor : "))
    let custoFinal = custoDeFabrica * (1 + (imposto + percentualDistribuidor) / 100)
    alert(`O custo de fábrica é : R$ ${custoDeFabrica}`)
    alert(`O imposto aplicado é : ${imposto}%`)
    alert(`A margem do distribuidor é : ${percentualDistribuidor}%`)
    alert(`O custo final é R$ ${custoFinal}.`)
})