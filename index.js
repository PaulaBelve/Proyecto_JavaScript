
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

//Elementos DOM 
let botonCarrito = document.getElementById("botonCarrito");
let modalBody = document.getElementById("modalBody");
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra");
let parrafoEnvio = document.getElementById('parrafoEnvio')
let parrafoTotal = document.getElementById('totalPedido');
let acumulador 
let divBudines = document.getElementById('cards-productos');

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

mostrarProductos()
 
// Función que agregue la cantidad elegida particularmente del producto que se esta eligiendo
  
function agregarCarrito(budin) {

console.log(`El budin ${budin.nombre}, de ${budin.sabor}, se agrego correctamente. N° de producto ${budin.id}`) 
    arrayCarrito.push(budin);
    console.log(arrayCarrito)
    localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
  }

  // Evento botonCarrito - llama a la función de productosAlcarrito

botonCarrito.addEventListener("click", () => {
 
  productosAlCarrito(arrayCarrito)

})


 // Función que vaya sumando la cantidad elegida (acumulador) id - cantidad * precio

 function productosAlCarrito (productosGuardados) {

  productosGuardados.forEach((productosCarrito) => {

    modalBody.innerHTML = `
    
    <section class="cardBudines" id ="productosCarrito${productosCarrito.id}">
    <article class=boxBudines>
                          <picture class="boxBudines__img">
                          <img src="${productosCarrito.imagen}" alt="">
                           </picture>

                          <div class="boxBudines__info">
                          <h2 class="boxBudines__title">"${productosCarrito.nombre}"</h2>
                          <p class="boxBudines__precio"> Precio: "$${productosCarrito.precio}" </p>
      
           
        </div>  
        </article>   
    </section>`

    
   
  })
  
    compraTotal(productosGuardados) 
    console.log(compraTotal)

} 



// Función total del pedido


function compraTotal(productosTotal) {
    acumulador = 0;
    //recorrer productosTotal
    productosTotal.forEach((productosCarrito)=>{
        acumulador += productosCarrito.precio 
    })
    console.log(acumulador)
    //if acumulador = 0 o !=
    if(acumulador == 0){
        parrafoTotal.innerHTML = `<p>No hay productos en el carrito</p>`
    }else{
        parrafoTotal.innerHTML = `Importe de su compra ${acumulador}`
    }}
   

  // Función que calcule el envio - envio sin costo - $200 de envio - (IF - ELSE)

  function ValidarEnvio (acumulador) {

    if (acumulador <= 1500) {parrafoEnvio.innerHTML = `<p>Debe abonar $200 de envío</p>`
      
    
  }else if (acumulador >= 3000){ 
      
      parrafoEnvio.innerHTML = `<p>Envio sin cargo!</p>`
      
} }

ValidarEnvio(acumulador)



    
   


   



 
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






                              
                              



