// Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.
document.getElementById("exercicio29").addEventListener("click", function somarMaiores() {
    let maior;
    let a = parseFloat(prompt("Digite um valor para (A):"))
    let b = parseFloat(prompt("Digite um valor para (B):"))
    let c = parseFloat(prompt("Digite um valor para (C):"))

    if (a < b && a < c) {
        maior = b + c
    } else if (b < a && b < c) {
        maior = a + c
    }
    else {
        maior = a + b
    }

    alert("A soma do dois maiores valores é " + maior)
})