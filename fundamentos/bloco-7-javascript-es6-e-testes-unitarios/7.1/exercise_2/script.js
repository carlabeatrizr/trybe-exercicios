const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sorted = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let n = arr[i];
                arr[i] = arr[j];
                arr[j] = n;
            }
        }
    }
    return arr;
};
console.log(`Os números ${sorted(oddsAndEvens)} se encontram ordenados de forma crescente!`);
// Seu código aqui.

console.log(oddsAndEvens); // será necessário alterar essa linha 😉