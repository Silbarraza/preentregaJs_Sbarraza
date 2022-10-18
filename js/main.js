/* Gestor de turnos (gimnasio)*/

//Funcion buscar cliente por dni

function existeClienteConDNI (dni) {

    let encontrado = false;

    for(const cliente of listaClientes) {
        if(cliente.dni === dni) {
        encontrado = true;
        }
    }
    return encontrado;
}


function buscarClientePorDNI (dni) {

    let clienteEncontrado;

    for(let i = 0; i < listaClientes.length; i++) {
        
        if(listaClientes[i].dni === dni) {
            clienteEncontrado = listaClientes[i].nombreYapellido;
            break;
        }

    }

    return clienteEncontrado;
}


//Clase para clientes
class Cliente {
    constructor (nombreYapellido, dni) {
        this.nombreYapellido = nombreYapellido;
        this.dni = dni;
    }
}

//Array con lista de clientes
const listaClientes = [];

listaClientes.push(new Cliente("Silvana Barraza", "32043974"));
listaClientes.push(new Cliente("Juan Gonzalez", "40223333"));
listaClientes.push(new Cliente("Daniela Perez", "37854525"));

//Clase con las clases del gym
class ClaseDelGym {

    constructor (nombreClase){
        this.nombreClase = nombreClase;
        this.estado = false;
        this.cliente ="";
    }

    reservaClase (cliente) {
        if(this.estado){
            console.log("Esta clase ya esta reservada");
        }else {
            this.estado=true;
            this.cliente=cliente;
            console.log("La tu lugar fue reservado con éxito");
        }

    }

    cancelaClase () {
        if(!this.estado){
            console.log("La clase esta disponible");
        }else {
            console.log("La reserva fue cancelada con éxito");
        }

    }
}

//Array con lista de las clases y horarios del gym
const listaClasesGym = [];

listaClasesGym.push(new ClaseDelGym("Zumba"));
listaClasesGym.push(new ClaseDelGym("TRX"));
listaClasesGym.push(new ClaseDelGym("Box Cardio"));
listaClasesGym.push(new ClaseDelGym("Streching"));
listaClasesGym.push(new ClaseDelGym("Entrenamiento Funcional"));
listaClasesGym.push(new ClaseDelGym("Full Body"));
listaClasesGym.push(new ClaseDelGym("Yoga"));

//Ingreso DNI del cliente para login
let dniIngresado = prompt("Ingrese su DNI");
let cantidadDeIntentos = 0;

while ((!existeClienteConDNI(dniIngresado)) && (cantidadDeIntentos < 3)){
    dniIngresado = prompt("El DNI ingresado no es correcto, por favor ingreselo nuevamente");
    cantidadDeIntentos++;
}


//Funcion para asignar el turno y reservar

function asignacionTurno (){
    if (numTurno <= 3 ) {
        numTurno++;
        alert(" Turno  N° "+numTurno+" reservado, "+ "te esperamos en la clase de " + claseIngresada + " ¡Muchas gracias!!!");        
    } else {
        alert ("No hay turnos para la clase seleccionada");
    }
}

const clienteRegistrado = buscarClientePorDNI(dniIngresado);
let claseIngresada= "";
let numTurno = 0;
let existeClase= "";

if (cantidadDeIntentos === 3) {
    alert ("Supero la cantidad de intentos");
}else {
    //seleccion de la clase del gym 
    claseIngresada = prompt("Hola " + clienteRegistrado + " elegi la clase a la que queres asisitir"); 
    
    //Buscamos usando some si la clase ingresada existe
    existeClase = listaClasesGym.some( function (ClaseDelGym) {
        return ClaseDelGym.nombreClase.toLowerCase() === claseIngresada.toLowerCase();
    }); 
    console.log(existeClase);
    
    //Si la clase se ingreso de forma incorrecta se pide que la ingrese de nuevo
    while(!existeClase) {
        alert ("La clase ingresada no corresponde a una clase activa de H&F Gym");

        existeClase = true;

        claseIngresada = prompt("Por favor, ingresa la clase a la que asistirás");

        existeClase = listaClasesGym.some( function (ClaseDelGym) {
            return ClaseDelGym.nombreClase.toLowerCase() === claseIngresada.toLowerCase();
        }); 
    }
    
    //si se ingresa correctamente se asigna de turno y la clase queda reservada
    asignacionTurno ();

    //la clase pasa a estado reservado
    claseIngresada.reservaClase(clienteRegistrado);

}
