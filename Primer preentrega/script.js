let precioFinal;
let porcentaje;

function impuesto(precio, porcentaje){
    return precioFinal = precio - (porcentaje * precio / 100);
}

alert("Simulador de precios (hasta 5 productos): \nIngrese valor - porcentaje y le brindamos precio final");

for (let i = 0; i < 5; i++){
    precio = parseInt(prompt("Ingrese su valor"));
    porcentaje = parseInt(prompt("Ingrese el porcentaje de descuento"));
    impuesto(precio, porcentaje);
    if (porcentaje >= 50){
        alert("Aproveche el descuento mayor al 50%")
    }
    alert("El precio final con descuento incluido será de: " + precioFinal); 
}
