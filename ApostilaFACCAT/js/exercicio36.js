/* Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais novo com a mulher mais velha. */
document.getElementById("exercicio36").addEventListener("click", function idades() {
    let soma;
    let produto;
    let idadeH1 = parseInt(prompt("Qual a idade do primeiro homem? :"))
    let idadeH2 = parseInt(prompt("Qual a idade do segundo homem? :"))
    let idadeM1 = parseInt(prompt("Qual a idade da primeira mulher? :"))
    let idadeM2 = parseInt(prompt("Qual a idade da primeira mulher? :"))

    if (idadeH1 < idadeM2) {
        soma = idadeH2 + idadeM1
        produto = idadeH1 * idadeM2
    } else {
        soma = idadeH2 + idadeM2
        produto = idadeH1 * idadeM1
    }
    alert(`A soma do home mais velho com a mulher mais nova é: ${soma}`)
    alert(`O produto do homem mais novo com a mulher mais velha é: ${produto}`)
})