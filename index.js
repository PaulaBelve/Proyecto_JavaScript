
//SIMULADOR CARRITO 

// OBJETO BUDINES

 class budines {

  constructor(id, nombre, sabor, precio, imagen) {

      this.id = id,
      this.nombre = nombre,
      this.sabor = sabor,
      this.precio = precio,
      this.imagen = imagen

  }

  mostrarBudines() {

    console.log(`El nombre es ${this.nombre}, su sabor ${this.sabor}, el precio es de ${this.precio}, la id es ${this.id}`)
  }



}

const budin1 = new budines(1, "Venus", "Cacao y banana", 1000, "img/recchoco.png")

const budin2 = new budines(2, "Gea", "Coco", 1200, "img/Reccoco.png")

const budin3 = new budines(3, "Poseidon", "Frutos rojos", 1250, "img/RecFr.png")

const budin4 = new budines(4, "Apollo", "Naranja", 900, "img/RecNar.png")



  // Objeto carrito de compras

  class carrito {
    constructor(id, cantidad) {
      (this.id = id), (this.cantidad = cantidad);
    }
  }
 

  // Array de budines y carrito

let productos = [];

let arrayCarrito = [];




// Array productos que se imprima en el local Storage.

if (localStorage.getItem ("productos")) {
  productos= JSON.parse(localStorage.getItem("productos")) ;
  console.log(productos) 
} else {
  console.log(`primera vez que se cargan los productos`)
  productos.push(budin1, budin2, budin3, budin4) ;
  localStorage.setItem("productos", JSON.stringify(productos))
}

// Array del carrito que se imprima en el local Storage.

if (localStorage.getItem ("Carrito")) {
  arrayCarrito= JSON.parse(localStorage.getItem("Carrito"))
  console.log(arrayCarrito)
} else {
  console.log(`inicia desde 0`)
  localStorage.setItem("Carrito", []) 
  console.log(arrayCarrito)
} 


// Pasando html a js

let divBudines = document.getElementById ("cards-productos")

function mostrarProductos () {

divBudines.classList.add('divBudines');
//divBudines.classList.add('boxBudines');

productos.forEach((budin) =>  {

divBudines.innerHTML += `
                          <section id= "${budin.id}" class="cardBudines">

                          <div class="divBudines">

                          <article class=boxBudines>
                          <picture class="boxBudines__img">
                          <img src="${budin.imagen}" alt="">
                           </picture>

                          <div class="boxBudines__info">

                          <h2 class="boxBudines__title">"${budin.nombre}"</h2>
                          <h3 class="boxBudines__subtitle">"${budin.sabor}"</h3>

                         <p class="boxBudines__precio"> Precio: "$${budin.precio}" </p>
                         
                         <button id="btnComprar${budin.id}" class="btn btn-outline-secondary">Comprar</button>

                         </div>
                         </article>`
                       


// BTN sumar productos al carrito - el click agrega el producto correspondiente al carrito

  let agregarProducto = document.getElementById(`btnComprar${budin.id}`)
   console.log (agregarProducto)
agregarProducto.addEventListener("click", () => {agregarCarrito(budin)})
}) 
 
}
 


// Función que agregue la cantidad elegida particularmente del producto que se esta eligiendo
  
function agregarCarrito(budin) {

console.log(`El budin ${budin.nombre}, de ${budin.sabor}, se agrego correctamente. N° de producto ${budin.id}`) 
    arrayCarrito.push(budin);
    console.log(arrayCarrito)
    localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
  }

  //mostrarProductos

  mostrarProductos()

 // Función que vaya sumando la cantidad elegida (acumulador) id - cantidad * precio

  // Función total del pedido

  // Función que calcule el envio - envio sin costo, $200 de envio - (IF)
    
   


   



 
 /* let agregarAlCarrito = new carrito(prod, 1);
     
 
 let producto = productos.find(elem => elem.id == prod);
    producto.addEventListener ("clik",  )
    console.log(producto);
    console.log('id producto' + prod);

  
  }
     */





 
  






  




  // mostrar funcion catalogo por Alert

/* function Catalogo(e) {
	e.preventDefault();
	alert('Podrá ver nuestras opciones en consola');

	for (let budines of productos) {
		console.log(budines);
	}
}

let botonCatalogo = document.getElementsByClassName('verCatalogo')[0];

botonCatalogo.addEventListener('click', Catalogo); */






                              
                              



