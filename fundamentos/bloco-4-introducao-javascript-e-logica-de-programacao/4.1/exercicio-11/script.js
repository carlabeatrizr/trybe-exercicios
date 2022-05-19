const anguloA = 80;
const anguloB = 30;
const anguloC = 70;

let somaDosAngulos = anguloA + anguloB + anguloC;

let angulosQueSaoPositivos = 
anguloA > 0 && anguloB > 0 && anguloC > 0;

if (angulosQueSaoPositivos) {
    if (somaDosAngulos === 180) {
        console.log(true);
} else {
    console.log(false);
}
} else {
    console.log("ângulo inválido")
}

