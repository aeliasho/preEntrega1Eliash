function saludarUsuario(nombre) {
    alert("Hola, " + nombre + ". Un gusto poder atenderte.");
}

let nombreUsuario = prompt("Hola ¿Con quién tenemos el gusto?");
saludarUsuario(nombreUsuario);

if (nombreUsuario) {
    let opcionAtencion;
    let ayuda;

    // Array de productos con nombres y precios actualizados
    let productos = [
        { nombre: "Llaveros", precio: 1000 },
        { nombre: "Muñecos", precio: 5500 },
        { nombre: "Calcomanías", precio: 1500 },
    ];

    while (true) {
        opcionAtencion = prompt("¿En qué te podemos ayudar? Elige un número:\n1. Compras\n2. Contacto\n3. Reclamos\n4. Devoluciones");

        switch (opcionAtencion) {
            case "1":
                // Mostrar opciones de compra
                let opcionCompra;
                while (true) {
                    opcionCompra = prompt("Elige un producto para comprar:\n1. " + productos[0].nombre + " - Precio: $" + productos[0].precio + "\n2. " + productos[1].nombre + " - Precio: $" + productos[1].precio + "\n3. " + productos[2].nombre + " - Precio: $" + productos[2].precio);
                    switch (opcionCompra) {
                        case "1":
                            ayuda = "Has seleccionado " + productos[0].nombre + " - Precio: $" + productos[0].precio;
                            break;
                        case "2":
                            ayuda = "Has seleccionado " + productos[1].nombre + " - Precio: $" + productos[1].precio;
                            break;
                        case "3":
                            ayuda = "Has seleccionado " + productos[2].nombre + " - Precio: $" + productos[2].precio;
                            break;
                        default:
                            if (opcionCompra === "") {
                                alert("Por favor, elige una opción válida de compra.");
                            } else {
                                alert("Opción no válida. Por favor, elige un producto para comprar.");
                            }
                            continue;
                    }
                    break;
                }
                break;
            case "2":
                ayuda = "Escogiste ponerte en contacto con nosotros.";
                break;
            case "3":
                ayuda = "Escogiste realizar un reclamo.";
                break;
            case "4":
                ayuda = "Escogiste solicitar una devolución.";
                break;
            default:
                if (opcionAtencion === "") {
                    alert("Por favor, elige un número de las opciones.");
                } else {
                    alert("Opción no válida. Por favor, elige un número de las opciones.");
                }
                continue;
        }

        break;
    }

    alert(ayuda);
    alert("Gracias por seleccionar su opción. En breve nos comunicaremos con usted.");
}
