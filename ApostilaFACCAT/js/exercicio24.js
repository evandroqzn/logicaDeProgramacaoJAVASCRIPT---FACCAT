// Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que ultrapassar este valor, calcular e escrever o seu salário total.
document.getElementById("exercicio24").addEventListener("click", function salarioVendedor(){ 
    let comissao;
    let salarioTotal;
    let salarioFixo = parseFloat(prompt("Qual o salário fixo do funcionário?"))
    let valorVendas = parseFloat(prompt("Qual o valor das vendas feitas pelo funcionário?"))

    if (valorVendas == 1500){
        comissao = valorVendas * 0.3
    } else{
        comissao = (1500 * 0.3) + ((valorVendas - 1500) * 0.5)
    }
    salarioTotal = comissao + salarioFixo
    alert(`Valor da comissão: R$ ${comissao.toFixed(2)}`)
    alert(`Salário total a receber: R$ ${salarioTotal.toFixed(2)}`)
})
