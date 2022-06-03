// console.log("Hello, world!")

// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

// const perimetroCuadrado = ladoCuadrado * 4;

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//     "Los lados del triángulo miden: "
//     + ladoTriangulo1
//     + "cm, "
//     + ladoTriangulo2
//     + "cm, "
//     + baseTriangulo
//     + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
// const diametroCirculo = radioCirculo * 2;

function diametroCirculo(radio) {
    return radio * 2;
}
// console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
// console.log("PI es: " + PI);

// Circunferencia
// const perimetroCirculo = diametroCirculo * PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

// Área
// const areaCirculo = (radioCirculo * radioCirculo) * PI;

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
// console.log("El área del círculo es: " + areaCirculo + "cm^2");
console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const lado1 = Number(inputLado1.value);
    const inputLado2 = document.getElementById("InputTrianguloLado2");
    const lado2 = Number(inputLado2.value);
    const inputBase = document.getElementById("InputTrianguloBase");
    const base = Number(inputBase.value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("InputTrianguloBase");
    const base = inputBase.value;
    const inputAltura = document.getElementById("InputTrianguloAltura");
    const altura = inputAltura.value;

    const area = areaTriangulo(base, altura);
    alert(area);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}