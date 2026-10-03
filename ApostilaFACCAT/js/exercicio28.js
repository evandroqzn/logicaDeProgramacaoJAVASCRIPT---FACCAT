// Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.
document.getElementById("exercicio28").addEventListener("click", function maiorValor(){
    let a = parseFloat(prompt("Digite um valor para (A):"))
    let b = parseFloat(prompt("Digite um valor para (B):"))
    let c = parseFloat(prompt("Digite um valor para (C):"))

    if (a > b && a > c ){
        alert(`${a} é o maior valor.`)
    } else if (b > a && b > c){
        alert(`${b} é o maior valor.`)
    }
    else{
        alert(`${c} é o maior valor.`)
    }
})