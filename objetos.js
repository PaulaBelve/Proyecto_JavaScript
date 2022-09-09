// OBJETO BUDINES

class budines {
    constructor(id, nombre, sabor, precio, imagen, descripción) {
      
      this.id = id, 
      this.nombre = nombre, 
      this.sabor = sabor, 
      this.precio = precio, 
      this.imagen = imagen,
      this.descripción = descripción
        
    }  
  
   mostrarBudines() {
      console.log(`El nombre es ${this.nombre}, su sabor ${this.sabor}, el precio es de ${this.precio}, la id es ${this.id}`);
    
    } }
  
/* const budin1 = new budines(1, 'Venus', 'Cacao y banana', 1000, 'img/recchoco.png');
  
  const budin2 = new budines(2, 'Gea', 'Coco', 1200, 'img/Reccoco.png');
  
  const budin3 = new budines(3, 'Poseidon', 'Frutos rojos', 1250, 'img/RecFr.png');
  
  const budin4 = new budines(4, 'Apollo', 'Naranja', 900, 'img/RecNar.png'); 
  
  let productos = [budin1,budin2,budin3,budin4];
  
  */

 
  
// Ruta relativa del HTML a JSON
//function fetchProductos () {}

let productos = [];

const cargarBudines = async () => {
 
  const response = await fetch(`./json/budines.json`)
  productos = await response.json();
  console.log (productos)


/*  for(let budin of data){
    let budinNuevo = new budines (
      budin.id, 
      budin.nombre, 
      budin.sabor, 
      budin.precio, 
      budin.imagen
      
      );
    productos.push(budinNuevo)
    console.log (budinNuevo) */
    // Función mostrar productos 


timerProductos();
    
} 

//FUNCIÓN CARGAR BUDINES

cargarBudines()






    


