let coche = 0.20;
let moto = 0.10;
let autobus = 0.5;

let vehiculo = prompt("Que tipo de vehiculo usaste: coche, moto o autobus?:");

let consumo = parseInt(prompt("Cuantos litros de combustible consumiste?:"));

let distancia = parseInt(prompt("Digita en numeros el total de kilometros recorridos:"));

if (vehiculo == "coche" && (consumo>0 && consumo <= 100)) {

    alert("Recorriste " + distancia + "km" + " y consumiste " + consumo + " litros de combustible, debes pagar: " + [(coche * distancia) + 5]);
}
else if ((vehiculo == "coche") && (consumo > 100)) {
    alert("Recorriste " + distancia + "km" + " y consumiste " + consumo + " litros de combustible, debes pagar: " + [(coche * distancia) + 10]);
}

if (vehiculo == "moto" && (consumo>0 && consumo <= 100)) {
    alert("Recorriste " + distancia + "km" + " y consumiste " + consumo + " litros de combustible, debes pagar: " + [(moto * distancia) + 5]);
}
else if ((vehiculo == "moto") && (consumo > 100)) {
    alert("Recorriste " + distancia + "km" + " y consumiste " + consumo + " litros de combustible, debes pagar: " + [(moto * distancia) + 10]);
}
if ((vehiculo == "autobus") && (consumo>0 && consumo <= 100)) {
    alert("Recorriste " + distancia + "km" + " y consumiste " + consumo + " litros de combustible, debes pagar: " + [(autobus * distancia) + 5]);
}
else if ((vehiculo == "autobus") && (consumo > 100)) {
    alert("Recorriste " + distancia + "km" + " y consumiste " + consumo + " litros de combustible, debes pagar: " + [(autobus * distancia) + 10]);
} 
