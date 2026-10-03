/* Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média final é: (n1 * 2 + n2 * 3 + n3 * 5) / 10 */
document.getElementById("exercicio13").addEventListener("click", function calculoNota() {
    let nota1 = parseFloat(prompt("Digite qual foi a primeira nota do aluno: "))
    let nota2 = parseFloat(prompt("Digite qual foi a segunda nota do aluno: "))
    let nota3 = parseFloat(prompt("Digite qual foi a terceira nota do aluno: "))
    let mediaFinal = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10
    alert(`A primeira nota do aluno é ${nota1.toFixed(2)}`)
    alert(`A segunda nota do aluno é ${nota2.toFixed(2)}`)
    alert(`A terceira nota do aluno é ${nota3.toFixed(2)}`)
    alert(`A média final do aluno é ${mediaFinal.toFixed(2)}`)
})