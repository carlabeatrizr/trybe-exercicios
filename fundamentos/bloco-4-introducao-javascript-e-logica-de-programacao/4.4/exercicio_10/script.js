let arr = [2, 3, 6, 7, 10, 1];

function indexMaiorValor(arr) {
    let maximo = arr[0];
    let indexMaximo = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maximo) {
            indexMaximo = i;
            maximo = arr[i];
        }
    }
    return indexMaximo;
}
console.log(indexMaiorValor(arr));