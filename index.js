
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

let divBudines = document.getElementById ("mercaderia")

divBudines.classList.add('divBudines');
//divBudines.classList.add('boxBudines');



productos.forEach((budines) =>  {


divBudines.innerHTML += `
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
                         
                         <button type="button" onclick="return agregarCarrito(${budines.id})" class="btn btn-outline-secondary"> Compra </button>

                         </div>
                         </article>`
                       
  }) 

  class carrito {
    constructor(nombre, cantidad) {
      (this.nombre = nombre), (this.cantidad = cantidad);
    }
  
    sumaCantidad() {
      this.cantidad = this.cantidad + 1;
    }
  }
  
  const arrayCarrito = [];
  
  // onclick sumar la cantidad pedida al carrito
  
  function agregarCarrito(prod) {
    let producto = productos.find(elem => elem.id == prod);
    console.log(producto);
    console.log('id producto' + prod);
  
    let agregarAlCarrito = new carrito(prod, 1);
    arrayCarrito.push(agregarAlCarrito);
  }
  
// mostrar funcion catalogo por Alert

function Catalogo(e) {
	e.preventDefault();
	alert('Podrá ver nuestras opciones en consola');

	for (let budines of productos) {
		console.log(budines);
	}
}

let botonCatalogo = document.getElementsByClassName('verCatalogo')[0];

botonCatalogo.addEventListener('click', Catalogo);






                              
                              



