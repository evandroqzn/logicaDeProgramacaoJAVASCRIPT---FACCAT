// Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.
document.getElementById("exercicio20").addEventListener("click", function crescente() {
    let valor1 = parseFloat(prompt("Digite um valor :"))
    let valor2 = parseFloat(prompt("Digite um segundo valor :"))
    if (valor1 == valor2) {
        alert("Os valores são iguais")
    } else if (valor1 < valor2) {
        alert(`A ordem crescente é ${valor1}, ${valor2}.`)
    } else {
        alert(`A ordem crescente é ${valor2}, ${valor1}.`)
    }
})