/* Gestor de turnos (gimnasio)*/

/* FUNCIONES */

/* function existeClienteConDNI (dni) {

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


//Funcion para asignar el turno y reservar

function asignacionTurno (){
    if (numTurno <= 3 ) {
        numTurno++;
        alert(" Turno  N° "+numTurno+" reservado, "+ "te esperamos en la clase de " + claseIngresada + " ¡Muchas gracias!!!");        
    } else {
        alert ("No hay turnos para la clase seleccionada");
    }
} */

/* CODIGO*/

/* //Clase para clientes
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
        if(!this.estado){
            this.estado=true;
            this.cliente=cliente;
            console.log("Reserva exitosa");
        }else {
            this.estado=false;
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
    for(let i = 0; i < listaClasesGym.length; i++) {
        
        if(listaClasesGym[i].nombreClase === claseIngresada) {
            listaClasesGym[i].reservaClase(clienteRegistrado);
            break;
        }
    }   
} */


/* Funciones */
/* function crearInputFecha (){
    //Creo el input fecha

    const fechaHoy = new Date();
    inputFecha = document.createElement("input");
    inputFecha.type = "date";
    inputFecha.min = `${fechaHoy.getFullYear()}-${fechaHoy.getMonth() + 1}-${fechaHoy.getDate()}`;

    //Agregamos input al formulario

    formElegirFecha.append(inputFecha);

}

function fechaSeaMayorAhoy(fecha){

    const dateHoy = new Date();
    const dateReserva = new Date(fecha);
    
    const anioFechaReservada = dateReserva.getFullYear();
    const mesFechaReservada = dateReserva.getMonth();
    const diaRechaReservada = dateReserva.getDate();

    //Validar si la fecha elegida es menor a hoy
    if(dateReserva < dateHoy){
        return false;
    }
    return true;
}

function crearOptionSelect () {

    for (const clase of listaClasesGym) {

        //crear option
        const option = document.createElement("option");
        option.value=clase.id;
        option.innerText=clase.nombreClase;

        //Agregar option a select
        selectClase.append(option);
    }
    
    formularioReservas.append(selectClase);

}

function buscarClasePorID (id) {
    return listaClasesGym.find( (elemento) => {
        return elemento.id === parseInt(id);
    });
}


//Clases del Gym
class ClaseDelGym {
    constructor (id, nombreClase, hora){
        this.id=id;
        this.nombreClase = nombreClase;
        this.hora= hora;
    }
}

const listaClasesGym = [];
let horarioClase = "";

listaClasesGym.push(new ClaseDelGym(1, "Funcional", horarioClase));
listaClasesGym.push(new ClaseDelGym(2, "TRX", horarioClase ));
listaClasesGym.push(new ClaseDelGym(3, "AeroBox", horarioClase));
listaClasesGym.push(new ClaseDelGym(4, "Streching", horarioClase));
listaClasesGym.push(new ClaseDelGym(5, "Zumba", horarioClase));
listaClasesGym.push(new ClaseDelGym(6, "Full Body", horarioClase));
listaClasesGym.push(new ClaseDelGym(7, "GAP", horarioClase));


//Construir el formulario
const formularioReservas = document.getElementById("formReserva");

let selectClase = document.getElementById("selectClase");
crearOptionSelect();

const formElegirFecha = document.getElementById("elegirFecha");

let inputFecha;
crearInputFecha();

formularioReservas.addEventListener("submit", (event) => {
    //Detenemos el evento
    event.preventDefault();

    selectClase.addEventListener("change", (event) =>{
    
        const target = event.target;
        const valor = target.value;
    
        //Buscar la cuenta por ID
        const clase = buscarClasePorID(valor);

    })


        
    
}) */
//localStorage.clear();

/* FUNCIONES */
function renderizarTabla () {
    //Limpiar el tbody
    tbodyClasesReservadas.innerHTML="";

    //Recorremos las reservas
    for(const reserva of reservas){
        // Crear el tr
        const tr = document.createElement("tr");

        // Creamos las columnas
        const td1 = document.createElement("td");
        td1.innerText = reserva.fecha;

        const td2 = document.createElement("td");
        td2.innerText = reserva.nombre;

        const td3 = document.createElement("td");
        td3.innerText = reserva.apellido;

        const td4 = document.createElement("td");
        td4.innerText= reserva.clase;

        //Agregar al tr
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);

        //Agregar tr al tbody
        tbodyClasesReservadas.append(tr);

    }


}

function crearInputFecha (){
    //Creo el input fecha

    const fechaHoy = new Date();
    inputFecha = document.createElement("input");
    inputFecha.type = "date";
    inputFecha.min = `${fechaHoy.getFullYear()}-${fechaHoy.getMonth() + 1}-${fechaHoy.getDate()}`;

    //Agregamos input al formulario

    formularioReservas.append(inputFecha);
}

function fechaSeaMayorAhoy(fecha){

    const dateHoy = new Date();
    const dateReserva = new Date(fecha);
    
    const anioFechaReservada = dateReserva.getFullYear();
    const mesFechaReservada = dateReserva.getMonth();
    const diaRechaReservada = dateReserva.getDate();

    //Validar si la fecha elegida es menor a hoy
    if(dateReserva < dateHoy){
        return false;
    }
    return true;
}

function obtenerReservas () {
    
    const reservasLS = localStorage.getItem ("reservas");

    if (reservasLS !== null) {
        return JSON.parse(reservasLS);
    }

    return [];
}

function fechaDisponible(fecha){
    
    return !reservas.some( (elemento) => {
        return elemento.fecha === fecha;
    });

} 


/* VARIABLES GLOBALES */
//localStorage.clear();

const formularioReservas = document.getElementById("reserva");

let inputFecha;
crearInputFecha();

const inputNombre = document.getElementById("nombre"); 
const inputApellido = document.getElementById("apellido"); 



let reservas = obtenerReservas();

const tbodyClasesReservadas = document.getElementById("tbodyClasesReservadas"); 




//console.log(selectClase);


/* CODIGO */
renderizarTabla();

/*EVENTOS */

formularioReservas.addEventListener("submit", (event)=>{
    
    //Detenemos el evento
    event.preventDefault();

    //Obtenemos los datos
    const fecha = inputFecha.value;
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;

    let selectClase = document.getElementById("selectClase");
    
    const clase = selectClase.addEventListener("change", (event)=>{
        const target = event.target;
        valor = target.value;
        return valor;
    });  
   
    //Chequeamos que la fecha no este reservada y que la fehca sea distinta de hoy
    if(fechaDisponible(fecha)) {

        // Chequeamos que la fecha elegida sea mayor al día de hoy
        if (fechaSeaMayorAhoy(fecha)){
            //Cargamos la reserva al array
            reservas.push({
            fecha: fecha,
            nombre: nombre,
            apellido: apellido,
            clase: clase,
        });

        //Cargar el array al localstorage
        localStorage.setItem("reservas", JSON.stringify(reservas));

        alert ("Clase reservada con éxito");

        //Limpiar inputs
        inputFecha.value="";
        inputNombre.value="";
        inputApellido.value="";
        //Renderizar tabla
        renderizarTabla();

        }else {

            alert("La fecha es incorrecta")

        }
        

    }else {
        alert ("Esta fecha ya esta reservada");
    }   


});




