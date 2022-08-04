
//SIMULADOR CARRITO 

// Function que corta el ciclo del menu principal

let Finalizar;

// OBJETO BUDINES

class budines {

  constructor(id, nombre, sabor, cantidad, precio) {

    this.id = id,
      this.nombre = nombre,
      this.sabor = sabor,
      this.cantidad = cantidad,
      this.precio = precio

  }

  mostrarBudines() {

    console.log(`El nombre es ${this.nombre}, su sabor ${this.sabor}, el precio es de ${this.precio}, la id es ${this.id}`)
  }

}

const budines1 = new budines(1, "venus", "cacao y banana", "", 1600)

const budines2 = new budines(2, "gea", "coco", "", 1200)

const budines3 = new budines(3, "poseidon", "frutos rojos", "", 2000)

const budines4 = new budines(4, "apollo", "naranja", "", 1500)

// Array de budines

const productos = [budines1, budines2, budines3, budines4];
console.log(productos)

const carrito = [];
console.log(carrito)

// Funciones

// Función que le permita al cliente agregar productos al carrito
// Le sume un + 1 al index asi arrancaba desde el numero uno, porque sino se me pisaba con el 0 de finalizar y encontre esta solución

function NuevoPedido() {
  let msg = '';
  productos.forEach((elem, index) => {
    msg += ` ${index+1} Nombre: ${elem.nombre} Precio: ${elem.precio}\n`;
  });
  let elegirProductos = prompt(msg);

  menuBudines(elegirProductos);
}

// Function que permita mostrar el catálogo en consola

function Catalogo() {

  alert("Podrá ver nuestras opciones en consola")

  for (let budines of productos) 
  { console.log(budines) }

}

// Function menu principal de opciones

function Menu() {

  let opciones = parseInt(prompt(`Bienvenida/o a delfos cocina! Ingrese la opción que desee realizar:
                      
                       1 - Mirar la lista de nuestros productos
                       2 - Agregar productos al carrito
                       0 - Finalizar`))

  menuDetallado(opciones)

}

//Funtion elegir la opción del menu principal

function menuDetallado(opcionSeleccionada) {
  switch (opcionSeleccionada) {
    case 0:
      Finalizar = true
      alert(`Gracias por elegirnos!`)
      break
    case 1:
      Catalogo()

      break
    case 2:
      NuevoPedido()

      break
    default:
      alert(`Ingrese una opción correcta`)
  }
}
//CÓDIGO:
// Ciclo While que finaliza el menu general

while (Finalizar != true) {

  Menu() }

// Invocación funciones

// Function que le devuelve el sabor del budin que pidio
// Decidi cambiarlo ya que no me salio sumar la cantidad que el cliente pedia - ahora se suma directamente cuando el cliente decide hacer otro pedido


function menuBudines(elegirProductos) {

	
  switch (elegirProductos) {
		case '1':
			alert(`el budin pedido es Venus - Sabor:
        ${productos[0].sabor}`);
			carrito.push(productos[0]);
			console.log(carrito);
			resumenDeCompra('1');
			break;

		case '2':
			alert(`el budin pedido es Gea - Sabor:
      ${productos[1].sabor}`);
			carrito.push(productos[1]);
			console.log(carrito);
			resumenDeCompra('2');
			break;

		case '3':
			alert(`el budin pedido es Poseidon - Sabor:
       ${productos[2].sabor}`);
			carrito.push(productos[2]);
			console.log(carrito);
			resumenDeCompra('3');
			break;

		case '4':
			alert(`el budin pedido es Apollo - Sabor:
        ${productos[3].sabor}`);
			carrito.push(productos[3]);
			console.log(carrito);
			resumenDeCompra('4');

			break;
		default:
			alert(`Ingrese una opción correcta`);
	}
}


// Function opcion para seguir comprando o finalizar la compra

function resumenDeCompra(elegirProductos) {

  let seguirComprando = ""

  switch (elegirProductos) {
    case "1":

      seguirComprando = prompt("¿Desea hacer otra compra? si/no").toLowerCase();

      if (seguirComprando === "si") {
        NuevoPedido()
      } else {
        alert(`El total de compra es: $${CompraTotal()}`)
        alert("Gracias por tu compra!");
      }
      break;
    case "2":

      seguirComprando = prompt("¿Desea hacer otra compra? si/no").toLowerCase();

      if (seguirComprando === "si") {
        NuevoPedido()
      } else {
        alert(`El total de compra es: $${CompraTotal()}`)
        alert("Gracias por tu compra!");
      }
      break;
    case "3":

      seguirComprando = prompt("¿Desea hacer otra compra? si/no").toLowerCase();

      if (seguirComprando === "si") {
        NuevoPedido()
      } else {
        alert(`El total de compra es: $${CompraTotal()}`)
        alert("Gracias por tu compra!");
      }
      break;
     case "4":

      seguirComprando = prompt("¿Desea hacer otra compra? si/no").toLowerCase();

      if (seguirComprando === "si") {
        NuevoPedido()
      } else {
        alert(`El total de compra es: $${CompraTotal()}`)
        alert("Gracias por tu compra!");
      }
      break;
    default:
      alert(`Ingrese una opción correcta`)
      resumenDeCompra(elegirProductos)
      
  }
}

// FUCTION COMPRA TOTAL

carrito.forEach((productos) => {
  console.log(`${productos.nombre} - $${productos.precio}`)
}) 

function CompraTotal() {

  let total = carrito.reduce((total, budines) => total + budines.precio, 0);
  return total;
} 




















































