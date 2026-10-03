/* Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado). Escrever também a média calculada. */
document.getElementById("exercicio17").addEventListener("click", function validacaoNotas() {
    let nota1 = parseFloat(prompt("Qual foi a nota do aluno na primeria avaliação?"))
    let nota2 = parseFloat(prompt("Qual foi a a nota do aluno na segunda avaliação?"))
    media = (nota1 + nota2) / 2
    if (media >= 6) {
        alert(`Aluno aprovado com média ${media}`)
    } else {
        alert(`Aluno reprovado com média ${media}`)
    }
})