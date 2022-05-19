let estadoPessoaCandidata = "aprovada";

switch (estadoPessoaCandidata) {
    case "aprovada":
        console.log("Você foi aprovada!");
        break;

    case "lista":
        console.log("Lista de espera.");
        break;

    case "reprovada":
        console.log("Você foi reprovada.");
        break;

    default:
        console.log("Não se aplica.");
        break;

}