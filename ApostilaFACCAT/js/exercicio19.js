// Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.
document.getElementById("exercicio19").addEventListener("click", function valorMaior(){
    let valor1 = parseFloat(prompt("Digite um valor : "))
    let valor2 = parseFloat(prompt("Digite um segundo valor : "))
    if(valor1 == valor2)
    {
        alert("Os valores são iguais")
    } else if(valor1 > valor2){
        alert("O maior valor é " + valor1)
    } else {
        alert(`O maior valor é ${valor2}`)
    }
})