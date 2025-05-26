function calcularRendimento() {
    const valorRendimento = parseFloat(document.getElementById("rendimento").value);

    if (!isNaN(valorRendimento)) {
        if (valorRendimento > 0) {
            const despesasFixa = valorRendimento * (50 / 100);
            const despesasVariaveis = valorRendimento * (30 / 100);
            const investimento = valorRendimento * (20 / 100);

            document.getElementById("resultadoFinanceiro").style.display = "block";
            
            document.getElementById("resultadoDespesasFixas").innerText = `R$ ${despesasFixa.toFixed(2)}`;
            document.getElementById("resultadoDespesasVariaveis").innerText = `R$ ${despesasVariaveis.toFixed(2)}`;
            document.getElementById("resultadoInvestimento").innerText = `R$ ${investimento.toFixed(2)}`;
        } else {
            alert("É necessário informar um valor acima de 0!!!")
        }
    } else {
        alert("Caracteres não são permitidos!!!")
    }
}