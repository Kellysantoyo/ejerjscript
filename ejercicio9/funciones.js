let helado=50;
let oreo=10+helado;
let kitkat=15+helado;
let brownie=20+helado;

topping=prompt("Digita que topping quieres para tu helado:");

if (topping=="oreo"){
    document.write("Tu helado cuesta: " + oreo );
}
else if(topping=="kitkat"){
    document.write("Tu helado cuesta: " + kitkat);
}
else if(topping=="brownie"){
    document.write("tu helado cuesta: " + brownie);
}
else{
    alert("No tenemos ese topping, lo sentimos.") ;
    document.write("Tu helado sin topping cuesta: " + helado);
}