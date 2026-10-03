// Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados.
document.getElementById("exercicio31").addEventListener("click", function triangulo() {
    let a = parseFloat(prompt("Digite um valor para (A):"))
    let b = parseFloat(prompt("Digite um valor para (B):"))
    let c = parseFloat(prompt("Digite um valor para (C):"))

    if (a < b + c && b < a + c && c < a + b){
        alert("É um triângulo")
    }else{
    alert("Não é um triângulo")
    }
})
