document.getElementById("exercicio07").addEventListener("click", function idadeExpressa(){
    let anos = parseInt(prompt("Quantos anos você possui atualmente : "))
    let meses = parseInt(prompt("Quantos meses inteiros desde o seu último aniversário : "))
    let dias = parseInt(prompt("Algum dia ficou de fora da conta? Informe quantos : "))
    let idadeDias = (anos * 365) + (meses * 30) + dias
    alert(`A idade do usuário expressa em dias é equivalente a ${idadeDias}.`)
})