/* Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). */
document.getElementById("exercicio18").addEventListener("click", function validacaoNotas(){
    let anotAtual = parseFloat(prompt("ANO ATUAL : "))
    let nascimento = parseInt(prompt("ANO EM QUE NASCEU : "))
    let validacao = anotAtual - nascimento
    if(validacao < 16 ){
        alert("Não pode votar!")
    } else if (validacao < 18) {
        alert("Apto à votar (voto facultativo)")
    } else {
        alert("Apto à votar (voto obrigatório)")
    }
})