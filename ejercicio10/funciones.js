let curso = 4999;
let carrera = 3999;
let master = 2999;
let google = 0.85;
let facebook = 0.80;
let jesua = 0.50;

let programa = prompt("Indica que programa academico quieres tomar: curso, carrera o master: ");
let beca = prompt("Indica si tienes una beca con google, facebook o Jesua: ");


if (programa == "curso" && beca == "google") {
    document.write("El programa CURSO dura dos meses, cuesta mensualmente: " + [curso * google] + " y el valor total del programa es:" + [curso * google * 2]);
}
else if (programa == "curso" && beca == "facebook") {
    document.write("El programa CURSO dura dos meses, cuesta mensualmente: " + [curso * facebook] + " y el valor total del programa es:" + [curso * facebook * 2]);
}
else if (programa == "curso" && beca == "jesua") {
    document.write("El programa CURSO dura dos meses, cuesta mensualmente: " + [curso * jesua] + " y el valor total del programa es:" + [curso * jesua * 2]);
}
else if (programa=="curso"){
    document.write("El programa CURSO dura dos meses, cuesta mensualmente: " + [curso] + " y el valor total del programa es:" + [curso * 2]);

}

if (programa == "carrera" && beca == "google") {
    document.write("El programa CARRERA dura SEIS meses, cuesta mensualmente: " + [carrera * google] + " y el valor total del programa es:" + [carrera * google * 6]);
}
else if (programa == "carrera" && beca == "facebook") {
    document.write("El programa CARRERA dura SEIS meses, cuesta mensualmente: " + [carrera * facebook] + " y el valor total del programa es:" + [carrera * facebook * 6]);
}
else if (programa == "carrera" && beca == "jesua") {
    document.write("El programa CARRERA dura SEIS meses, cuesta mensualmente: " + [carrera * jesua] + " y el valor total del programa es:" + [carrera * jesua * 6]);
}
else if (programa=="carrera"){
    document.write("El programa CARRERA dura SEIS meses, cuesta mensualmente: " + [carrera] + " y el valor total del programa es:" + [carrera * 6]);

}

if (programa == "master" && beca == "google") {
    document.write("El programa MASTER dura DOCE meses, cuesta mensualmente: " + [master * google] + " y el valor total del programa es:" + [master * google * 12]);
}
else if (programa == "master" && beca == "facebook") {
    document.write("El programa MASTER dura DOCE meses, cuesta mensualmente: " + [master * facebook] + " y el valor total del programa es:" + [master * facebook * 12]);
}
else if (programa == "master" && beca == "jesua") {
    document.write("El programa MASTER dura DOCE meses, cuesta mensualmente: " + [master * jesua] + " y el valor total del programa es:" + [master * jesua * 12]);
}

else if (programa=="master"){
    document.write("El programa MASTER dura DOCE meses, cuesta mensualmente: " + [master] + " y el valor total del programa es:" + [master * 12]);

}