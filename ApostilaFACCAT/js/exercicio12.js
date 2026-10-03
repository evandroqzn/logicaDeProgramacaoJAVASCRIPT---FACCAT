/* Leia uma temperatura em graus Fahrenheit e calcule o valor correspondente em graus Celsius.

Fórmula:
C / 5 = (F - 32) / 9

Observação:
Para testar se a resposta está correta, considere que 100°C = 212°F. */

document.getElementById("exercicio12").addEventListener("click", function conversorTemperatura() {
    
    let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit: "))
    let celsius = (fahrenheit - 32) * 5 / 9

    console.log(`A temperatura em Fahrenheit é ${fahrenheit.toFixed(2)} ºF`)
    console.log(`A temperatura em Celsisu é ${celsius.toFixed(2)} ºC`)

})