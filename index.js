// DESAFIO COMPLEMENTARIO - ARRAYS

    // OBJETOS

  class budines {  
    
    constructor(id, nombre, sabor, cantidad, precio) {
    
    this.id = id,
    this.nombre = nombre,
    this.sabor = sabor,
    this.cantidad = cantidad,
    this.precio = precio
  
  }

  mostrarBudines() { 
  
    console.log(`El nombre es ${this.nombre}, su sabor ${this.sabor}, el precio es de ${this.precio}, la id es ${this.id}` )} 
  
  }

 const budines1 = new budines (1,"venus", "cacaoybanana", "" , 1600 )
 
 const budines2 = new budines (2,"gea", "coco", "", 1200 )
 
 const budines3 = new budines (3,"poseidon", "frutosrojos", "", 2000 )
 
 const budines4 = new budines (4,"apollo", "naranja", "", 1500)
 
// Array de budines

 const productos = [budines1, budines2, budines3, budines4];
 console.log (productos)

 const carrito = [];
 console.log (carrito)

 // Funciones

 // Función que le permita al cliente agregar productos al carrito

  function NuevoPedido () {
  let elegirProductos = prompt(`
            Eliga el número correspondiente del budin que desea comprar
           
            1. Nombre: ${productos[0].nombre}
            Precio: $${productos[0].precio}
            2. Nombre: ${productos[1].nombre}
            Precio: $${productos[1].precio}
            3. Nombre: ${productos[2].nombre}
            Precio: $${productos[2].precio}
            4. Nombre: ${productos[3].nombre}
            Precio: $${productos[3].precio}
        `)

        console.log (NuevoPedido)

        menuBudines(elegirProductos)
 
}

// Function que permita mostrar el catálogo en consola

function Catalogo () {

  alert ("Podrá ver nuestras opciones en consola")

  for (let budines of productos) 
  {console.log (budines)}

}

 // Function menu principal de opciones

function Menu () {

 let opciones = parseInt(prompt(`Bienvenida/o a delfos cocina! Ingrese la opción que desee realizar:
                      
                       1 - Mirar la lista de nuestros productos
                       2 - Agregar productos al carrito
                       3 - Eliminar del carrito
                       0 - Finalizar`))

                       menuDetallado(opciones)

                       } 

//Funtion elegir la opción del menu principal

function menuDetallado (opcionSeleccionada){
  switch(opcionSeleccionada){
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
       case 3: 
          //eliminarLibro()
       
      break 
       default: 
      alert(`Ingrese una opción correcta`)
  }
}

//CÓDIGO:

let Finalizar 
while(Finalizar != true){
    
  Menu()
  
}

// Invocación funciones

// Function que suma nombre - precio - cantidad

function menuBudines (elegirProductos) {


switch (elegirProductos) {
      
      case "1": (prompt(`ingrese la cantidad que desea pedir:
        ${productos[0].cantidad}`))
      carrito.push(productos[0])
      console.log(carrito)
      resumenDeCompra("1")
      break 
       
      case "2": (prompt(`ingrese la cantidad que desea pedir:
      ${productos[1].cantidad}`))
       carrito.push(productos[1])
       console.log(carrito)
       resumenDeCompra("2")
       break 
       
       case "3": prompt(`ingrese la cantidad que desea pedir: 
       ${productos[2].cantidad}`)
       carrito.push(productos[2])
       console.log(carrito)
       resumenDeCompra("3")
       break 
      
       case "4": (prompt(`ingrese la cantidad que desea pedir:
        ${productos[3].cantidad}`))
       carrito.push(productos[3])
       console.log(carrito)
       resumenDeCompra("4")
      
       break 
       default: 
      alert(`Ingrese una opción correcta`)
       
    } }

// Function opcion para seguir comprando o finalizar la compra

function resumenDeCompra (elegirProductos) {

  let seguirComprando = ""

  switch (elegirProductos) {
      case "1" : 

      seguirComprando = prompt("¿Desea hacer otra compra? si/no").toLowerCase();

                if (seguirComprando === "si") {
                    NuevoPedido()
                } else {
                   alert ("Gracias por tu compra!");
                }
                break;
                case "2" : 

      seguirComprando = prompt("¿Desea hacer otra compra? si/no").toLowerCase();

                if (seguirComprando === "si") {
                    NuevoPedido()
                } else {
                   alert ("Gracias por tu compra!");
                }
                break;
                case "3" : 

      seguirComprando = prompt("¿Desea hacer otra compra? si/no").toLowerCase();

                if (seguirComprando === "si") {
                    NuevoPedido()
                } else {
                   alert ("Gracias por tu compra!");
                }
                break;
                case "4" : 

      seguirComprando = prompt("¿Desea hacer otra compra? si/no").toLowerCase();

                if (seguirComprando === "si") {
                    NuevoPedido()
                } else {
                   alert ("Gracias por tu compra!");
                }
                break; 
       default: 
      alert(`Ingrese una opción correcta`)
      resumenDeCompra (elegirProductos)
       break    } }

       carrito.forEach((productos)=> {
        console.log(`${productos.nombre} - $${productos.precio}`)
    }) 
    
    alert(`El total de compra es: $${CompraTotal()}`)
  
  function CompraTotal(){

           let total = carrito.reduce((total, budines) => total + budines.precio, 0);
      return total;
  }



  









  
  
  
 

     
      
 

 



     
    
    
    



  










 







