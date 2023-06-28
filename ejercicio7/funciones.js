let diaSemana;
diaSemana = prompt("Ingresa el dia de la semana:");

if (diaSemana == "lunes")
{
    document.write("Comienza la semana con energia");
}
else if (diaSemana == "viernes")
{
    document.write("es hoy... llego el viernes, se acerca el fds");
}
else if (diaSemana == "sabado" || diaSemana == "domingo")
document.write("Estoy en modo descanso, no molestar");
else {
    document.write("Cuando sera viernes?");
}
