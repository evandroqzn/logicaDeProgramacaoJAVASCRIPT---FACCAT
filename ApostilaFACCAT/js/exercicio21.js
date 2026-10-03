//Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
//minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
//de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.

document.getElementById("exercicio21").addEventListener("click", function calcularDuracaoJogo() {
    calcularDuracaoJogo()

     {
        horainicio = parseInt(prompt("Digite a hora que iniciou o jogo de xadrez: "))

        horafim = parseInt(prompt("Digite a hora que terminou o jogo de xadrez: "))

        //o jogo começa hoje termina amanha
        if (horainicio >= horafim) {
            duracao = horafim - horainicio + 24
        }
        //o jogo começa hoje e termina hoje
        else {
            duracao = horafim - horainicio
        }

        alert("A duração da partida foi de ${duracao} horas")
    }
})