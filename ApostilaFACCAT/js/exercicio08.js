// Descrição:Escreva um algoritmo para ler o número total de eleitores de
//um município, o número de votos brancos, nulos e válidos.
// Calcular e escrever o percentual que cada um representa em relação ao total
// de eleitores

document.getElementById("exercicio08").addEventListener("click", function calculoEleitoral(){


    let municipio = prompt("Deseja Analisar Qual Municipío?")
    let eleitoresTotal = parseInt(prompt(`Qual o total de eleitores no municipío ${municipio}?`))
    let votosNulos = parseInt(prompt(`Quantos votos NULOS o municipío ${municipio} tem?`))
    let votosBrancos = parseInt(prompt(`Quantos votos BRANCOS o municipío ${municipio} tem?`))
    let votosValidos = parseInt(prompt(`Quantos votos VÁVLIDOS o municipío ${municipio} tem?`))

    let percentualNulos = votosNulos / eleitoresTotal * 100
    let percentualBrancos = votosBrancos / eleitoresTotal * 100
    let percentualValidos = votosValidos / eleitoresTotal * 100
    alert(`O percentual de votos NULOS no municipío ${municipio} é ${percentualNulos}`)
    alert(`O percentual de votos BRANCOS no municipío ${municipio} é ${percentualBrancos}`)
    alert(`O percentual de votos VALIDOS no municipío ${municipio} é ${percentualValidos}`)

})