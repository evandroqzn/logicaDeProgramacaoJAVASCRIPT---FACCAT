// Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.
document.getElementById("exercicio32").addEventListener("click", function futebol(){
    let time1 = prompt("Nome do time da casa : ")
    let golstime1 = prompt(`Gols feitos pelo time ${time1} :`)
    let time2 = prompt("Nome do time de fora : ")
    let golstime2 = prompt(`Gols feitos pelo time ${time2} :`)
    if(golstime1 != golstime2){
        if(golstime1 > golstime2){
            alert(`O time ${time1} fez mais gols e ganhou a partida por ${golstime1} a ${golstime2}`)
        } else{
            alert(`O time ${time2} fez mais gols e ganhou a partida por ${golstime2} a ${golstime1}`)

        }
    } else{
        alert("Deu empate!")
    }

})