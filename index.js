//SIMULADOR CARRITO

// OBJETO BUDINES

class budines {
  constructor(id, nombre, sabor, precio, imagen) {
    (this.id = id), (this.nombre = nombre), (this.sabor = sabor), (this.precio = precio), (this.imagen = imagen);
  }

  mostrarBudines() {
    console.log(`El nombre es ${this.nombre}, su sabor ${this.sabor}, el precio es de ${this.precio}, la id es ${this.id}`);
  }
}

const budin1 = new budines(1, 'Venus', 'Cacao y banana', 1000, 'img/recchoco.png');

const budin2 = new budines(2, 'Gea', 'Coco', 1200, 'img/Reccoco.png');

const budin3 = new budines(3, 'Poseidon', 'Frutos rojos', 1250, 'img/RecFr.png');

const budin4 = new budines(4, 'Apollo', 'Naranja', 900, 'img/RecNar.png');

// Objeto carrito de compras

class carrito {
  constructor(id, cantidad) {
    (this.id = id), (this.cantidad = cantidad);
  }
}

// Array de budines y carrito

let productos = [];

let arrayCarrito = [];

//Elementos DOM
let botonCarrito = document.getElementById('botonCarrito');
let modalBody = document.getElementsByClassName('modal-content');
let botonFinalizarCompra = document.getElementById('botonFinalizarCompra');
let parrafoEnvio = document.getElementById('parrafoEnvio');
let parrafoTotal = document.getElementById('totalPedido');
let acumulador=0;
let divBudines = document.getElementById('cards-productos');

// Array productos que se imprima en el local Storage.

if (localStorage.getItem('productos')) {
  productos = JSON.parse(localStorage.getItem('productos'));
  console.log(productos);
} else {
  console.log(`primera vez que se cargan los productos`);
  productos.push(budin1, budin2, budin3, budin4);
  localStorage.setItem('productos', JSON.stringify(productos));
}

// Array del carrito que se imprima en el local Storage.

if (localStorage.getItem('Carrito')) {
  arrayCarrito = JSON.parse(localStorage.getItem('Carrito'));
  console.log(arrayCarrito);
} else {
  console.log(`inicia desde 0`);
  localStorage.setItem('Carrito', []);
  console.log(arrayCarrito);
}

// DOM DE CARDS BUDINES

function mostrarProductos() {
  divBudines.classList.add('divBudines');

  productos.forEach(budin => {
    const section = document.createElement('section');
    section.className = 'cardBudines';
    section.setAttribute('id', budin.id);
    section.innerHTML = `
                          <div class="divBudines">

                          <article class=boxBudines>
                          <picture class="boxBudines__img">
                          <img src="${budin.imagen}" alt="">
                           </picture>

                          <div class="boxBudines__info">

                          <h2 class="boxBudines__title">${budin.nombre}</h2>
                          <h3 class="boxBudines__subtitle">${budin.sabor}</h3>

                         <p class="boxBudines__precio"> Precio: "$${budin.precio}" </p>
                         
                         <button id="btnComprar${budin.id}" class="btn btn-outline-secondary">Comprar</button>

                         </div>
                         </article>`;

    divBudines.append(section);

    // BTN sumar productos al carrito - el click agrega el producto correspondiente al carrito

    document.getElementById(`btnComprar${budin.id}`).addEventListener('click', e => {
      e.preventDefault();
      agregarCarrito(budin);
    });
  });
}

// Función mostrarProductos

mostrarProductos();

// Función que agregue la cantidad elegida particularmente del producto que se esta eligiendo

function agregarCarrito(budin) {
  console.log(`El budin ${budin.nombre}, de ${budin.sabor}, se agrego correctamente. N° de producto ${budin.id}`);
  arrayCarrito.push(budin);
  console.log(arrayCarrito);
  localStorage.setItem('Carrito', JSON.stringify(arrayCarrito));
}

// INTENTOS POR IMPRIMIR LOS PRODUCTOS DEL CARRITO EN EL MODAL

// Evento botonCarrito - llama a la función de productosAlcarrito

// Función que vaya sumando la cantidad elegida (acumulador) id - cantidad * precio
/*const getCart = list => {
  const carts = list?.map(
    item =>
      ` <div class="cardBudines" id ="productosCarrito${item.id}">
    <article class=boxBudines>
                          <picture class="boxBudines__img">
                          <img src="${item.imagen}" alt="">
                           </picture>

                          <div class="boxBudines__info">
                          <h2 class="boxBudines__title">"${item.nombre}"</h2>
                          <p class="boxBudines__precio"> Precio: "$${item.precio}" </p>       
        </div>  
        </article>   
    </div>`
  );
  document.getElementsByClassName('modal-body').innerHTML = carts.join('');
}; */

/* function productosAlCarrito(productosGuardados) {
  console.log(productosGuardados);
  productosGuardados.forEach(productosCarrito => {
    modalBody.innerHTML += ` <section class="cardBudines" id ="productosCarrito${productosCarrito.id}">
    <article class=boxBudines>
                          <picture class="boxBudines__img">
                          <img src="${productosCarrito.imagen}" alt="">
                           </picture>

                          <div class="boxBudines__info">
                          <h2 class="boxBudines__title">"${productosCarrito.nombre}"</h2>
                          <p class="boxBudines__precio"> Precio: "$${productosCarrito.precio}" </p>       
        </div>  
        </article>   
    </section>`;
  });

  compraTotal(productosGuardados);
} */

// Función calcular total del pedido

function compraTotal(productosTotal) {
  //recorrer productosTotal
  productosTotal.forEach(productosCarrito => {
    acumulador += productosCarrito.precio;
  });
  console.log(acumulador);
  //if acumulador = 0 o !=
  if (acumulador == 0) {
    return `<p>No hay productos en el carrito</p>`;
  } else {
    return `Importe de su compra ${acumulador}`;
  }
}

// Función que calcule el envio - envio sin costo - $200 de envio - (IF - ELSE)

function ValidarEnvio(acu) {
  if (acu <= 1500) {
    return `<p>Debe abonar $200 de envío</p>`;
  } else if (acu >= 3000) {
    return `<p>Envio sin cargo!</p>`;
  }
}


// Get the modal
let modal = document.getElementById('myModal');

// Get the button that opens the modal
let btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
let span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal

// Función que imprime el carrito en el modal

botonCarrito.onclick = function () {

  const carts = arrayCarrito.map(
    item =>
      ` <div class="cardBudines" id ="productosCarrito${item.id}">
    <article class=boxBudines>
                          <picture class="boxBudines__img">
                          <img src="${item.imagen}" alt="">
                           </picture>
  
                          <div class="boxBudines__info">
                          <h2 class="boxBudines__title">"${item.nombre}"</h2>
                          <p class="boxBudines__precio"> Precio: "$${item.precio}" </p>       
        </div>  
        </article>   
    </div>`
  );
 console.log(acumulador)

 // Funcion de compraTotal y ValidarEnvio

  const parrafos=`
  <p id="parrafoTotal">${compraTotal(arrayCarrito)}</p>
  <p id="parrafoEnvio">${ValidarEnvio(acumulador)}</p>
  `
  const aux=carts.join("") +parrafos
  document.getElementById('modal-body').innerHTML = aux;
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};








    
   


   









 
  






  











                              
                              



