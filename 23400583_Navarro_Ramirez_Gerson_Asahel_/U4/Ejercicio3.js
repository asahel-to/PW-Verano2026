//EJERCICIO 3

/* Elavora un programa que tenga una funciona llamada potencia y reciva 2 parametros; base y exponente
    la funcion debera retornar la potencia segun los parametros, el calculo de la potencia se hara por 
    un ciclo for
*/


function potencia(valor, base) {
    let res = 1;
    for (let index = 0; index < base; index++) {

        res = res * valor;

    }

    console.log(res)
}

potencia(2, 16);

/*
2. cajero automatico: simular un cajero con saldo inicial de $5000, mostrar menu:
consultar saldo, depositar, retirar, salir, no permitir retirar mas dinero
*/

let saldo = 5000;

function cajero(opcion, cantidad = 0) {

    switch (opcion.toLowerCase()) {
        case "consultar":
            console.log(`Tu saldo actual es de: $${saldo}`);
            break;

        case "depositar":
            if (cantidad > 0) {
                saldo += cantidad; 
                console.log(`Has depositado: $${cantidad}. Tu nuevo saldo es: $${saldo}`);
            } else {
                console.log("Por favor, ingresa una cantidad válida para depositar.");
            }
            break;

        case "retirar":
            if (cantidad <= 0) {
                console.log("Por favor, ingresa una cantidad válida para retirar.");
            } else if (cantidad > saldo) {
             
                console.log(`No puedes retirar $${cantidad}. Tu saldo disponible es de solo: $${saldo}`);
            } else {
                saldo -= cantidad; 
                console.log(`Has retirado: $${cantidad}. Tu saldo restante es: $${saldo}`);
            }
            break;

        case "salir":
            console.log("Gracias por usar el cajero automático. ¡Hasta luego!");
            break;

        default:
            console.log("Opción no válida. Intenta con: 'consultar', 'depositar', 'retirar' o 'salir'.");
            break;
    }
}


cajero("consultar");       
cajero("depositar", 1500); 
cajero("retirar", 8000); 
cajero("retirar", 2000);  
cajero("salir");          

/*
4. juego de dados
*/
function juegoDados() {
    let dado1, dado2;
    let lanzamientos = 0;

    do {
        dado1 = Math.floor(Math.random() * 6) + 1;
        dado2 = Math.floor(Math.random() * 6) + 1;
        
        lanzamientos++;
        
  
        console.log(dado1 + " - " + dado2);
        
    } while (dado1 !== dado2);

    console.log("Se necesitaron " + lanzamientos + " lanzamientos.");
}

juegoDados();

/*
4. adivinar el nomero

La computadora genera un número entre 1 y 100. El usuario tiene máximo 
7 intentos. Después de cada intento indicar Más grande Más pequeño
*/

function adivinarNumero() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    const maxIntentos = 7;
    let intentosUsados = 0;
    let adivinado = false;

    console.log("¡Comienza el juego! Adivina el número secreto entre 1 y 100.");

    while (intentosUsados < maxIntentos && !adivinado) {
        let intentosRestantes = maxIntentos - intentosUsados;
        
        // Concatenamos el mensaje para el prompt
        let entrada = prompt("Introduce tu número (Intentos restantes: " + intentosRestantes + "):");
        
        if (entrada === null) {
            console.log("Juego cancelado.");
            return;
        }

        let intentoUsuario = parseInt(entrada, 10);

        if (isNaN(intentoUsuario) || intentoUsuario < 1 || intentoUsuario > 100) {
            alert("Por favor, ingresa un número válido entre 1 y 100.");
            continue;
        }

        intentosUsados++;

        if (intentoUsuario === numeroSecreto) {
            adivinado = true;
            alert("¡Felicidades! Adivinaste el número en " + intentosUsados + " intentos.");
            console.log("¡Ganaste! El número secreto era " + numeroSecreto + ".");
        } else if (intentoUsuario < numeroSecreto) {
            alert("El número secreto es Más grande");
            console.log("Intento " + intentosUsados + ": " + intentoUsuario + " -> Más grande");
        } else {
            alert("El número secreto es Más pequeño");
            console.log("Intento " + intentosUsados + ": " + intentoUsuario + " -> Más pequeño");
        }
    }

    if (!adivinado) {
        alert("Te quedaste sin intentos. El número secreto era: " + numeroSecreto);
        console.log("Perdiste. El número secreto era " + numeroSecreto + ".");
    }
}

adivinarNumero();


/*
5.- Registro de ventas
Crea un programa que simule el registro de ventas de una tienda. Cada venta debe 
contener el nombre del vendedor, el nombre del producto, la cantidad vendida y el precio unitario. 
El programa debe permitir registrar múltiples ventas (solicitándolos mediante prompt()) y al finalizar 
debe mostrar en consola el total de ventas realizadas, el total de ingresos generados, cuántas unidades 
se vendieron de cada producto y cuál fue el vendedor que generó el mayor monto en ventas. El ejercicio 
debe aplicar ciclos, arreglos, objetos, condicionales y usar métodos como .push(), .map(), .forEach() o .reduce().
*/

function registroVentas() {
    let ventas = [];
    let continuar = true;

    while (continuar) {
        let vendedor = prompt("Nombre del vendedor:");
        if (vendedor === null) break;

        let producto = prompt("Nombre del producto:");
        if (producto === null) break;

        let cantidad = parseInt(prompt("Cantidad vendida:"), 10);
        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Cantidad no válida. Inténtalo de nuevo.");
            continue;
        }

        let precioUnitario = parseFloat(prompt("Precio unitario:"));
        if (isNaN(precioUnitario) || precioUnitario <= 0) {
            alert("Precio no válido. Inténtalo de nuevo.");
            continue;
        }

        let venta = {
            vendedor: vendedor,
            producto: producto,
            cantidad: cantidad,
            precioUnitario: precioUnitario,
            totalVenta: cantidad * precioUnitario
        };
        
        ventas.push(venta);

        let respuesta = prompt("¿Deseas registrar otra venta? (si/no)");
        if (respuesta === null || respuesta.toLowerCase() !== "si") {
            continuar = false;
        }
    }

    if (ventas.length === 0) {
        console.log("No se registraron ventas.");
        return;
    }

    let totalVentasRealizadas = ventas.length;

    let totalIngresos = ventas.reduce(function(acumulador, ventaActual) {
        return acumulador + ventaActual.totalVenta;
    }, 0);

    let unidadesPorProducto = {};
    ventas.forEach(function(venta) {
        if (unidadesPorProducto[venta.producto] === undefined) {
            unidadesPorProducto[venta.producto] = 0;
        }
        unidadesPorProducto[venta.producto] = unidadesPorProducto[venta.producto] + venta.cantidad;
    });

    let ventasPorVendedor = {};
    ventas.forEach(function(venta) {
        if (ventasPorVendedor[venta.vendedor] === undefined) {
            ventasPorVendedor[venta.vendedor] = 0;
        }
        ventasPorVendedor[venta.vendedor] = ventasPorVendedor[venta.vendedor] + venta.totalVenta;
    });

    let mejorVendedor = "";
    let montoMayor = 0;

    for (let vendedor in ventasPorVendedor) {
        if (ventasPorVendedor[vendedor] > montoMayor) {
            montoMayor = ventasPorVendedor[vendedor];
            mejorVendedor = vendedor;
        }
    }

    console.log("Total de ventas realizadas: " + totalVentasRealizadas);
    console.log("Total de ingresos: $" + totalIngresos.toFixed(2));
    
    console.log("Unidades vendidas por producto:");
    for (let producto in unidadesPorProducto) {
        console.log("- " + producto + ": " + unidadesPorProducto[producto] + " unidades");
    }

    console.log("Vendedor con más ventas: " + mejorVendedor + " ($" + montoMayor.toFixed(2) + ")");
}

registroVentas();