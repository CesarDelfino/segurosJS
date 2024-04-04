function leerTipo() {
    let tipo;
    do {
        tipo = Number(prompt("Ingrese el tipo de vehículo: 1-Moto. 2-Auto. 3-Camioneta. 4-Camión."));
    } while(tipo > 4 || tipo == 0);
    return tipo;
}

function leerModelo() {
    let modelo;
    do {
        modelo = Number(prompt("Ingrese el año del vehículo:"));
    } while(modelo > 2024 || modelo < 1990);
    return modelo;
}

function cotizar(tipo, modelo, valor) {
    let cotizacionTR
    switch(tipo){
    case 1:     
        cotizacionTR = valor * 0.002;
    case 2:   
        cotizacionTR = valor * 0.003;
    case 3:   
        cotizacionTR = valor * 0.0035;
    case 4:
        cotizacionTR = valor * 0.004;
    }   
    if(modelo < 2016)   
        cotizacionTR = cotizacionTR + (cotizacionTR * 0.10);
    return cotizacionTR;
}

alert("Bienvenidos a cotizaciones de Seguros JS");
let tipoVC = leerTipo();
let modeloVC = leerModelo();
let valorVC = Number(prompt("Ingrese el valor del vehículo."));

let cotizacionVC = cotizar(tipoVC, modeloVC, valorVC);
let cotizacion3R = cotizacionVC - (cotizacionVC * 0.20);

alert("Su cotización todo riesgo es de: " + cotizacionVC);
alert("Su cotización terceros es de: " + cotizacion3R);