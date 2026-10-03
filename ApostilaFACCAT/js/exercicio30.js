// Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem crescente

document.getElementById("exercicio30").addEventListener("click", function ordemCrescente() {
    let a = parseFloat(prompt("Digite um valor para (A):"))
    let b = parseFloat(prompt("Digite um valor para (B):"))
    let c = parseFloat(prompt("Digite um valor para (C):"))

    if (a < b && b < c) {
        alert(`Ordem crescrente: ${a}, ${b}, ${c}.`)
    } else if (a < c && c < a) {
        alert(`Ordem crescrente: ${a}, ${c}, ${b}.`)
    } else if (b < a && a < c) {
        alert(`Ordem crescrente: ${b}, ${a}, ${c}.`)
    } else if (b < c && c < a) {
        alert(`Ordem crescrente: ${b}, ${c}, ${a}.`)
    } else if (c < a && a < b) {
        alert(`Ordem crescrente: ${c}, ${a}, ${b}.`)
    } else {
        alert(`Ordem crescrente: ${c}, ${b}, ${a}.`)
    }
})