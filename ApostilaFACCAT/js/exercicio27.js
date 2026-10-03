// Ler um valor e escrever se é positivo, negativo ou zero
document.getElementById("exercicio27").addEventListener("click", function propriedadeNumero() {
    let numero = parseFloat(prompt("DIGITE UM NÚMERO :"))
    if (numero > 0) {
        alert("Esse número é positivo!")
    }
    else 
        if (numero < 0) {
            alert("Esse número é negativo!")
        }
    else {
        alert("Esse número é o zero")
    }
})