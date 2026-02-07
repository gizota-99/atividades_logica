let valor = parseFloat(prompt("Digite o valor da compra:"));


if (valor > 100) {
    let desconto = valor * 0.10;
    let valorFinal = valor - desconto;
    alert("Desconto aplicado! Valor final: R$ " + valorFinal.toFixed(2));
} else {
    alert("Sem desconto. Valor total: R$ " + valor.toFixed(2));
}
