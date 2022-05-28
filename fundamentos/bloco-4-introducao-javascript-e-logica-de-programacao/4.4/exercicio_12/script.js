let arrTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(arr) {
    let m = 0;
    let maior;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > m) {
            m = arr[i].length;
            maior = arr[i];
        }
    }
    return maior;
}
console.log(maiorNome(arrTeste));
