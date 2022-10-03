/* Gestor de turnos (gimnasio)
Objetivo del usuario:
Registrarse (usuario/dni/contraseña) 
Poder reservar un turno en una clase del día con minimo de 30 minutos de anticipación, cada clase tiene un cupo de 14 personas.
Una vez obtenido el turno, el usuario podrá cancelarlo/modificarlo con hasta 30 minutos de anticipación (ingresando su contraseña previamente cargada para poder cancelar el turno)
el usuario puede listar su historial de clases

objetivo del administrador:
listar los turnos activos por clases 
listar el historial de turnos por cliente*/

//Seleccionar clase

const clave = 333;
let claveIngresada = parseInt(prompt ("Ingresa tu clave"));
let cantidadDeIntentos = 0;

let claseIngresada ="";
let numTurno = 0;

while ((claveIngresada !== clave) && (cantidadDeIntentos < 3)) {
    alert ("La clave es incorrecta");
         
    claveIngresada = parseInt (prompt("Por favor ingresa tu clave nuevamente"));
    
    cantidadDeIntentos++;
} 

if (cantidadDeIntentos === 3) {
    alert ("Supero la cantidad de intentos");
}else {
       
    claseIngresada = listaClases(prompt("Elegí la clase a la que asistirás"));
    
    while (claseIngresada == 0) {
        alert ("La clase ingresada no corresponde a una clase activa de MS Gym");

        claseIngresada = listaClases(prompt("Por favor, ingresa la clase a la que asistirás"));
    }

    cuentaTurnos ();

}



function cuentaTurnos (){
 
    if (numTurno <= 3 ) {
        numTurno++;
        alert(" Turno  N° "+numTurno+" reservado, "+ "te esperamos en la clase de " + claseIngresada + " ¡Muchas gracias!!!");

    } else {
        alert ("No hay turnos para la clase seleccionada");
    }
}


function listaClases (clase){ 

    switch (clase){

        case "SPINNING":
        case "spinning":
        case "Spinning":
            return "Spinning";
            break;
        case "ENTRENAMIENTO FUNCIONAL":
        case "entrenamiento funcional":
        case "Entrenamiento Funcional":
            return "Entrenamiento Funcional";
            break;
        case "trx":
        case "TRX":
            return "TRX";
            break;
        case "fullbody":
        case "full body":
        case "Full body":
        case "FULL BODY":
        case "FULLBODY":    
        case "Full Body":    
            return "Full Body";
            break;
        case "ZUMBA":
        case "zumba":
        case "Zumba":
            return "Zumba";
            break;
        default:
            return 0;
            break;
    }
}

