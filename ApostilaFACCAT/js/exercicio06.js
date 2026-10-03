
// Recebe base e altura e devolve area do retangulo
document.getElementById("exercicio06").addEventListener("click", function areaRetangulo() {

    base = prompt("Defina uma base para o retangulo :")
    altura = prompt("Defina uma altura para o retangulo")
    retangulo = base * altura
    return alert(`A area do retângulo é ${retangulo}m²`)
})