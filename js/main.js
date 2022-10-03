/* Gestor de turnos (gimnasio)*/



const clave = 333;
let claveIngresada = parseInt(prompt ("Ingresa tu clave"));
let cantidadDeIntentos = 0;

let claseIngresada ="";
let numTurno = 0;

//ingresar clave
while ((claveIngresada !== clave) && (cantidadDeIntentos < 3)) {
    alert ("La clave es incorrecta");
         
    claveIngresada = parseInt (prompt("Por favor ingresa tu clave nuevamente"));
    
    cantidadDeIntentos++;
} 

if (cantidadDeIntentos === 3) {
    alert ("Supero la cantidad de intentos");
}else {
    //seleccion de la clase del gym   
    claseIngresada = listaClases(prompt("Elegí la clase a la que asistirás"));
    
    while (claseIngresada == 0) {
        alert ("La clase ingresada no corresponde a una clase activa de MS Gym");

        claseIngresada = listaClases(prompt("Por favor, ingresa la clase a la que asistirás"));
    }

    //asignación de turno
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

