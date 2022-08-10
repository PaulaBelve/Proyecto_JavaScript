
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

  // Sumar la cantidad pedida

}

const budines1 = new budines(1, "Venus", "Cacao y banana", 1000, "img/recchoco.png")

const budines2 = new budines(2, "Gea", "Coco", 1200, "img/Reccoco.png")

const budines3 = new budines(3, "Poseidon", "Frutos rojos", 1250, "img/RecFr.png")

const budines4 = new budines(4, "Apollo", "Naranja", 900, "img/RecNar.png")

// Array de budines

const productos = [budines1, budines2, budines3, budines4];
console.log(productos)


// Pasando html a js
//let mercaderia = document.getElementsByClassName("cardBudines")

let divBudines = document.getElementById ("mercaderia")

productos.forEach((budines) =>  {

let carritoProductos = document.createElement("div")
carritoProductos.innerHTML = `
                          <section id= ${budines.id} class="cardBudines">

                          <div class="divBudines">

                          <article class=boxBudines>
                          <picture class="boxBudines__img">
                          <img src="${budines.imagen}" alt="">
                           </picture>

                          <div class="boxBudines__info">

                          <h2 class="boxBudines__title">${budines.nombre}</h2>
                          <h3 class="boxBudines__subtitle">${budines.sabor}</h3>

                         <p class="boxBudines__precio"> Precio: ${budines.precio} </p>
                         
                         <button type="button" onclick="agregarCarrito(${budines.id})" class="btn btn-outline-secondary"> Compra </button>

                         </div>
                         </article>`

     //  mercaderia.appendChild(carritoProductos)                       
   
     divBudines.appendChild(carritoProductos)

  })


// Class carrito 

 class carrito { 

  constructor(nombre, cantidad) {
  
  this.nombre = nombre,
  this.cantidad = cantidad 
}} 

const arrayCarrito = []

function agregarCarrito (prod) {

  console.log(prod)
}


/* <section id= ${budines.id} class="cardBudines"> 
                              <img class="imgCard" src="${budines.imagen}" alt="">
                              <div class="info">
                              <h2 class="nombreCard"> ${budines.nombre}</h2>
                              <h3 class="saborCard">  ${budines.sabor}</h3>
                              <p class="precioCard"> Precio: ${budines.precio}</p>
                              </div> 
                              </section> */

                           //   <a onclick="agregarCarrito(${budines.nombre})" class="btn btn-primary"> Comprar </a>
                              
                              
//divBudines.setAttribute("class", "divBudines")
//divBudines.setAttribute("class", "boxBudines")


