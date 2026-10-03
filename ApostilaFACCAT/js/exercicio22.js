/* A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas). */
document.getElementById("exercicio22").addEventListener("click", function calculoHorasExtras() {
    let horasTrabalhadas = parseInt(prompt("Quantas horas inteiras o colaborador trabalhou no mês?"));
    let salarioPorHora = parseFloat(prompt("Qual o salário por hora do colaborador?"));
    
    let horasExtras;
    let salarioPadrao;
    let salarioTotal;

    if (horasTrabalhadas > 160) {
        horasExtras = horasTrabalhadas - 160;
        salarioPadrao = 160 * salarioPorHora;
        salarioTotal = salarioPadrao + (horasExtras * salarioPorHora * 1.5);
        
        alert(`O funcionário fez ${horasExtras} horas extras.`);
        alert(`O salário total do funcionário com extras é de: R$ ${salarioTotal.toFixed(2)}.`);
    }
    else {
        salarioTotal = horasTrabalhadas * salarioPorHora;
        alert("O funcionário não fez horas extras.");
        alert(`O salário total do funcionário é de: R$ ${salarioTotal.toFixed(2)}.`);
    }
});
