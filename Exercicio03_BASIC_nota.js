// Notas
let nota = parseInt(prompt("Nota do aluno (0 a 100):"));

while (nota < 0 || nota > 100) {
    alert("Erro: Nota fora do limite (0 a 100).");
    nota = parseInt(prompt("Digite novamente a nota:"));
}

if (nota >= 60) {
    alert("Aprovado");
} else {
    alert("Reprovado");
}
