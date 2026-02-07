// Calculadora Simples - intemediário
const num1 = Number(prompt("Digit o primeiro numero"));
const num2 = Number(prompt("Digit o segundo numero"));
const op = prompt("Digite a operação (+, -, *, /)");

let resultado;

if(Number.isNaN(numb1) || Number.isNaN(num2)){
    alert("Erro: Digite apenas numeros válidos!")
}else if(op === "+"){
    resultado = num1 + num2;
    alert("Reultado da soma:" + resultado)
}else if(op === "-"){
    resultado = num1 - num2;
    alert("Reultado da soma:" + resultado)
}else if(op === "*"){
    resultado = num1 * num2;
    alert("Reultado da soma:" + resultado)
}else if(op === "/"){
    resultado = num1 / num2;
    alert("Reultado da soma:" + resultado)
}else{
    alert("Erro: Operação Inválida!")
}

