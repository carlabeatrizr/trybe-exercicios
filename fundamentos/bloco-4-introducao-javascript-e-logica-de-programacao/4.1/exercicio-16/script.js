const valorProduto = 10
const valorDeVenda = 30
const quantidadeDeProdutos = 1000;
const taxa = 1.2;

if(valorProduto >= 0 && valorDeVenda >= 0){
    const custoTotalDoProduto = valorDeVenda * taxa;
    const lucroTotal = (valorDeVenda - custoTotalDoProduto) * quantidadeDeProdutos;
    console.log(lucroTotal);
} else{
    console.log("Erro, valor abaixo de zero!");
}