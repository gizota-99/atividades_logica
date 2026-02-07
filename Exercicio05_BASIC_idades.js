let idade = parseInt(prompt("Digite sua idade:"));

if (isNaN(idade) || idade < 0) {
    alert("Erro: idade inválida");
} else if (idade <= 12) {
    alert("Criança");
} else if (idade <= 17) {
    alert("Adolescente");
} else {
    alert("Adulto");
}