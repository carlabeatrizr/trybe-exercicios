let arrTeste = [2, 3, 2, 5, 8, 2, 3];

function riptideNumber(arr) {
    arr.sort();

    let contagemMaxima = 1;
    let res = arr[0];
    let contagemAtual = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            contagemAtual += 1;
        } else {
            contagemAtual = 1;
        }

        if (contagemAtual > contagemMaxima) {
            contagemMaxima = contagemAtual;
            res = arr[i - 1];
        }
    }

    return res;
}
console.log(riptideNumber(arrTeste))
