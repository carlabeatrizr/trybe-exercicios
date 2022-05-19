const anguloA = 60;
const anguloB = 50;
const anguloC = 10;

let somaDosAngulos = anguloA + anguloB + anguloC;

let angulosQueSaoPositivos = 
anguloA > 0 && anguloB > 0 && anguloC > 0;

if (angulosQueSaoPositivos) {
    if (somaDosAngulos === 120) {
        console.log(true);
} else {
    console.log(false);
}
} else {
    console.log("ângulo inválido")
}

