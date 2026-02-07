let numero = parseFloat(prompt("Insira um número"));

if (isNaN(numero)) {
    alert("Erro: isso não é um número");
} else if (numero > 0) {
    alert("Positivo");
} else if (numero < 0) {
    alert("Negativo");
} else {
    alert("Zero");
}