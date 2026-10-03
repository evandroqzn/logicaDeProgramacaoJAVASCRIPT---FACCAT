// Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar compra'.
document.getElementById("exercicio26").addEventListener("click", function calculoEstoque(){
    let quantidadeMedia;
    let quantidadeAtual = parseInt(prompt("Qual a quantidade atual de danone no estoque?"))
    let quantidadeMinima = parseInt(prompt("Qual a quantidade miníma que devemos ter no estoque?"))
    let quantidadeMaxima = parseInt(prompt("Quanto cabe ao todo no estoque?"))
    quantidadeMedia = (quantidadeMaxima + quantidadeMinima)/2
    if (quantidadeAtual >= quantidadeMedia){
        alert("Não efeturar compra!")
    } else{ 
        alert("Efetuar compra!")
    }
})