

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

 const budines1 = new budines (1,"venus", "cacaoybanana", 2, 1600 )
 
 const budines2 = new budines (1,"gea", "coco", 2, 1200 )
 
 const budines3 = new budines (3,"poseidon", "frutosrojos", 2, 2000 )
 
 const budines4 = new budines (4,"apollo", "naranja", 2, 1500)
 
// Array de budines

 const carrito = [budines1, budines2, budines3, budines4]
 console.log (carrito)

 // Funciones

 // Bienvenida del sitio

 // Función que le permita al cliente agregar productos al carrito

 function NuevoPedido () {

  alert("Podrá elegir entre estas opciones: venus, gea, poseidon y apollo")

  let nombreIngresado = prompt("Ingrese el nombre del budin que desea agregar al carrito")
  
  let saborIngresado = prompt("Ingrese el sabor")
  
  let cantidadIngresada = parseInt(prompt("Ingrese la cantidad que desea pedir"))
  
  let pedidoRealizado = new budines (carrito.length+1,nombreIngresado,saborIngresado,cantidadIngresada)
  console.log (pedidoRealizado)
  carrito.push(pedidoRealizado)
}

// Función que permita mostrar el catálogo en consola

function Catalogo () {

  alert ("Podrá ver nuestras opciones en consola")

  for (let budines of carrito) 
  {console.log (budines)}

}

 // Función menu de opciones

function Menu () {

 let opciones = parseInt(prompt(`Bienvenida/o a delfos cocina! Ingrese la opción que desee realizar:
                      
                       1 - Mirar la lista de nuestros productos
                       2 - Agregar productos al carrito
                       3 - Eliminar del carrito
                       0 - Finalizar`))

                       menuDetallado(opciones)

                       } 

//Función del menu
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
  









  
  
  
 

     
      
 

 



     
    
    
    



  










 







     



      

    






