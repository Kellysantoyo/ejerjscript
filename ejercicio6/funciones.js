let num1;
let num2;
let num3;
let mayor;
let t;
num1 = parseInt(prompt("Ingresa un numero:"));
num2 = parseInt(prompt("Ingresa segundo numero:"));
num3 = parseInt(prompt("Ingresa tercer numero:"));

if (num1 >= num2) {
    t = num1;
}
else {
t=num2;
}
if (t>=num3){
    mayor=t;
    }
    else{
        mayor=num3;
}
    document.write("El numero mayor es:" + mayor);