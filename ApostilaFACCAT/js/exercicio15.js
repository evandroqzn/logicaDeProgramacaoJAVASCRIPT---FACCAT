// Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo).
document.getElementById("exercicio15").addEventListener("click", function numeroPositivo(){
    let numero = parseFloat(prompt("Digite um numero: "))
    if(numero >= 0){
        alert("É positivo!")
    } else{
        alert("É negativo!")
    }
})