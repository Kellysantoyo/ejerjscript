let nota;
nota=prompt("digite la calificacion obtenida en un rango de 1 a 10:");
if (nota<1 || nota>10){
    alert("La nota debe ser mayor o igual a 1 y menor o igual a 10 ");
}
else if(nota<6){
    document.write("Reprobado")
}
else if(nota >=6 && nota<=8){
document.write("regular")
}
else if(nota >=9 && nota<10){
document.write("Bien")
}
else{
    document.write("Excelente")
}