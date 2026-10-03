    // algoritmo para ler o salário mensal atual de um funcionário
    // e o percentual de reajuste. Calcular e escrever o valor do novo salário.
document.getElementById("exercicio09").addEventListener("click", function calculoReajuste(){
    let salario = parseFloat(prompt("Digite o salário mensal do funcionário : "))
    let reajuste = parseFloat(prompt("Digite a porcentangem de reajuste salarial : "))
    let novoSalario = ((reajuste/100)*salario) + salario 
    return alert(`O novo salário do funcionário é de ${novoSalario} R$`)
})
