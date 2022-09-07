
//Elementos DOM

let botoneliminar = document.getElementById('icon-borrar')
let verDescripcion = document.getElementById('verDescripción');
let botonCarrito1 = document.getElementById('botonCarrito1');
let botonCarrito = document.getElementById('botonCarrito');
let modalBody = document.getElementsByClassName('modal-content');
let botonFinalizarCompra = document.getElementById('botonFinalizarCompra');
let parrafoEnvio = document.getElementById('parrafoEnvio');
let parrafoTotal = document.getElementById('totalPedido');
let acumulador = 0;
let divBudines = document.getElementById('cards-productos');
// Get the modal
let modal = document.getElementById('myModal');
// Get the button that opens the modal
let btn = document.getElementById('myBtn');
// Get the <span> element that closes the modal
let span = document.getElementsByClassName('close')[0];

// Objeto carrito de compras

class carrito {
  constructor(id, cantidad) {
    (this.id = id), (this.cantidad = cantidad);
  }
}

// Array de budines y carrito

let arrayCarrito = [];


// Array del carrito que se imprima en el local Storage.

function carritoStorage() {

  if (localStorage.getItem('Carrito')) {
    arrayCarrito = JSON.parse(localStorage.getItem('Carrito'));
    console.log(arrayCarrito);
  } else {
    console.log(`inicia desde 0`);
    localStorage.setItem('Carrito', []);
    console.log(arrayCarrito);
  }
}

// DOM CARDS PRODUCTOS

function mostrarProductos() {

  divBudines.classList.add('divBudines');

  //productos

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

                          <a class="nav_link"><img src="./img/2703085_bag_cart_ecommerce_shop_icon.png" class="estilosBotonCarrito1" id="botonCarrito1${budin.id}" alt=""/></a>

                          <div class="boxBudines__info">

                          <h2 class="boxBudines__title">${budin.nombre}</h2>
                          
                          <h3 class="boxBudines__subtitle">${budin.sabor}</h3>
                          

                         <p class="boxBudines__precio"> Precio: $${budin.precio}</p>

                         <a class="descripción" id="verDescripción${budin.descripción}">Ver descripción</a>
                         
                         </div>
                         </article>`;

    divBudines.append(section);


    // Evento - sumar productos al carrito - el click agrega el producto correspondiente al carrito

    document.getElementById(`botonCarrito1${budin.id}`).addEventListener('click', e => {
      e.preventDefault();


      agregarCarrito(budin);

  // Recorrer con un map el array de productos para que muestre la descripción en un modal
      productos.map(budin=>mostrarDescripcion(budin))



    });
  })

};

// Función que agregue la cantidad elegida particularmente del producto que se esta eligiendo

function agregarCarrito(budin) {

  console.log(`El budin ${budin.nombre}, de ${budin.sabor}, se agrego correctamente. N° de producto ${budin.id}`);
  arrayCarrito.push(budin);
  console.log(arrayCarrito);
  localStorage.setItem('Carrito', JSON.stringify(arrayCarrito));


  Swal.fire({
    title: "Su producto ha sido seleccionado",
    text: `El budin ${budin.nombre} ha sido agregado al carrito`,
    icon: "success",
    timer: 2000,
    //showConfirmButton: false,
    confirmButtonText: "OK",
  })
};

// RE VER EL ORDEN - COMO ORDENO ESTA FUNCIÓN

// CARD - mostrar descripción del producto

function mostrarDescripcion(budin) {

 /* document.getElementById(`verDescripción${budin.descripción}`).addEventListener('click', e => {
    e.preventDefault(); console.log(budin)
  }) */

  document.getElementById(`verDescripción${budin.descripción}`).onclick = () => {
    console.log(budin)
  }
}

  /*   Swal.fire({
     title: `Budin ${budin.nombre}`,
     text: `${budin.descripción}, ingredientes:${budin.ingredientes} `,
     imageUrl: `{budin.img}`,
     imageWidth: 100,
     imageHeigth: 100,
 //  showConfirmButton: false,
     confirmButtonText:"agregar al carrito",
 }) */



// Función total del pedido

function compraTotal(...productosTotal) {

  acumulador = 0;

  //recorrer productosTotal

  acumulador = productosTotal.reduce((acumulador, item) => {
    return acumulador + item.precio
  }, 0);

  console.log(acumulador);

  //if acumulador = 0 o !=

  const result = acumulador >= 0 ? `El total de su compra es de: $${acumulador}` : `No hay productos en el carrito`;

  return result

};

// Función que calcule el envio - envio sin costo - $200 de envio - (IF - ELSE)

function ValidarEnvio(acu) {

  const data = acu >= 3000 ? `Envio sin cargo!` : `Debe abonar $200 de envío`;

  return data

};

function eliminarCarrito(item) {

  /*document.getElementById(`icon-borrar-${item.id}`).addEventListener('click', e => {
      e.preventDefault()
      console.log(item);
    })*/

  document.getElementById(`icon-borrar-${item.id}`).onclick = () => {
    console.log(item)
  }
}

// Invocar función donde se agregan los productos al Modal

function productosModal() {

  // Evento para abrir el modal

  botonCarrito.onclick = function () {

    const carts = arrayCarrito.map(
      item =>
        ` <div class="cardBudines" id ="productosCarrito${item.id}">
    <article class=boxBudines>
                          <picture class="boxBudines__img">
                          <img src="${item.imagen}" alt="">
                           </picture>
  
                          <div class="boxBudines__info">
                          <h2 class="boxBudines__title">${item.nombre}</h2>
                          <p class="boxBudines__precio"> Precio:${item.precio}</p> 
                          <a id="icon-borrar-${item.id}"><img class="icon-borrar" src="./img/delete.png"/></a>

        </div>  
        </article>   
    </div>`

    )

    const modalBody = `
  <p id="parrafoTotal">${compraTotal(...arrayCarrito)}</p>
  <p id="parrafoEnvio">${ValidarEnvio(acumulador)}</p>
  
  `

    const aux = carts.join("") + modalBody
    document.getElementById('modal-body').innerHTML = aux;
    modal.style.display = 'block';
    arrayCarrito.map(item => eliminarCarrito(item))
  };
}

/* function eliminarCarrito () {

  const listaBorrada = []
  arrayCarrito.map((item) => {

    document.getElementById(`icon-borrar-${item.id}`).addEventListener('click', e => {
      e.preventDefault()
      
      console.log(item);
  })
  
  }) } */

// FUNCION BOTON CONFIRMAR COMPRA

function finalizarCompra() {

  //Confirmación de la compra, eliminar elementos del array y removerlos del localStorage

  arrayCarrito = []
  localStorage.removeItem('Carrito')

  //Mostrar el total
  console.log(`El total de su compra es ${acumulador}`)

  //Volver a cargar el array carrito
  productosModal(arrayCarrito)

  Swal.fire({
    title: `Tu compra ha sido realizada!!`,
    text: `El total de su compra es ${acumulador}. En breves le estaremos mandando un mail con el detalle de su compra`,
    footer: `Gracias por elegirnos!`,
    imageUrl: `img/delfos sombra.png`,
    imageWidth: 200,
    imageHeigth: 100,
    imageAlt: `Custom image`,
    showConfirmButton: true,
  })

}

// FUNCTION - CLICK CONFIRMAR COMPRA Y VACIAR EL CARRITO 

function confirmarCompra() {

  botonCarrito.addEventListener('click', () => {
    productosModal(arrayCarrito)
  })
  botonFinalizarCompra.addEventListener('click', () => {
    finalizarCompra()
  })
}

//Confirmar compra

confirmarCompra();


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

// Invocación de funciones

// Función carritoStorage

carritoStorage();

// Función productos modal 

//productosModal() ;
productosModal();

















