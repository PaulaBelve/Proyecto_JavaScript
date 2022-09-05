// Bienvenida a la tienda

/*Swal.fire ({

  title: `Bienvenido/a`,
  text: `Tienda oficial de delfos cocina` ,
  imageUrl: `img/delfos sombra.png`,
  imageWidth: 300,
  imageHeigth: 100,
  timer: 3000,
  imageAlt:  `Custom image` ,
  showConfirmButton: false ,
}) */

//Elementos DOM

let botoneliminar = document.getElementById('icon-borrar')
let verDescripcion = document.getElementById('verDescripción') ;
let botonCarrito1 = document.getElementById('botonCarrito1');
let botonCarrito = document.getElementById('botonCarrito');
let modalBody = document.getElementsByClassName('modal-content');
let botonFinalizarCompra = document.getElementById('botonFinalizarCompra');
let parrafoEnvio = document.getElementById('parrafoEnvio');
let parrafoTotal = document.getElementById('totalPedido');
let acumulador=0;
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

function carritoStorage () {

if (localStorage.getItem('Carrito')) {
  arrayCarrito = JSON.parse(localStorage.getItem('Carrito'));
  console.log(arrayCarrito);
} else {
  console.log(`inicia desde 0`);
  localStorage.setItem('Carrito', []);
  console.log(arrayCarrito);
} }

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
    

    // BTN sumar productos al carrito - el click agrega el producto correspondiente al carrito

    document.getElementById(`botonCarrito1${budin.id}`).addEventListener('click', e => {
      e.preventDefault();

      
      
      agregarCarrito(budin);

      mostrarDescripcion(budin)

    });
  })

  } ;

  // CUANDO CLICKEO EL CARRITO DE LA FOTO, SE ME ABRE LA DESCRIPCIÓN EN EL MODAL EN VEZ DE EN EL VOTON DE VER DESCRIPCION

  //Modal - mostrar descripción del producto

  function mostrarDescripcion (budin) {

    console.log(`El budin ${budin.nombre}, ${budin.descripción}, se agrego correctamente. N° de producto ${budin.id}`);

    document.getElementById(`verDescripción${budin.descripción}`).addEventListener('click', e => {
      e.preventDefault(); })

      Swal.fire({
      title: `Budin ${budin.nombre}`,
      text: ` ${budin.descripción} `,
      icon: "success",
      timer: 2000,
    //  showConfirmButton: false,
      confirmButtonText:"OK",
  })

  } 

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
  //  showConfirmButton: false,
    confirmButtonText:"OK",
})
}

// Función total del pedido

function compraTotal(...productosTotal) {

  acumulador = 0 ;
 
  //recorrer productosTotal

  acumulador = productosTotal.reduce((acumulador, item) => {
    return acumulador + item.precio
},0) ;

console.log(acumulador) ;
 
  //if acumulador = 0 o !=

  const result = acumulador >= 0 ? `El total de su compra es de: $${acumulador}` :  `No hay productos en el carrito` ;

  return result
 
} ;

// Función que calcule el envio - envio sin costo - $200 de envio - (IF - ELSE)

function ValidarEnvio(acu) {

  const data = acu >= 3000 ? `Envio sin cargo!` : `Debe abonar $200 de envío` ;

  return data

  } 

 // Invocar función donde se agregan los productos al carrito

 function productosModal () {

  // When the user clicks on the button, open the modal

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
                          <p class="boxBudines__precio"> Precio:"${item.precio}"</p> 
                         

        </div>  
        </article>   
    </div>`

)
 
// console.log(acumulador) 

  const modalBody=`
  <p id="parrafoTotal">${compraTotal(...arrayCarrito)}</p>
  <p id="parrafoEnvio">${ValidarEnvio(acumulador)}</p>
  
  `

const aux=carts.join("") +modalBody
  document.getElementById('modal-body').innerHTML = aux;
  modal.style.display = 'block'; }; 

  }

 /* function eliminarCarrito {

  <a id="icon-borrar">${item.id}</a>

    const eliminarCarrito= ` <a id="icon-borrar">${item.id}</a>`


const eliminar=carts.join("") +eliminarCarrito
document.getElementById('icon-borrar').innerHTML = eliminar; 


  } */





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


// Función carritoStorage

carritoStorage() ;

// Función productos modal 

productosModal() ;











                              
                              


