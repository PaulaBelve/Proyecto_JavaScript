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
  

// Ruta relativa del HTML a JSON

let productos = [];

const cargarBudines = async () => {
 
  const response = await fetch(`./json/budines.json`)
  productos = await response.json();
  console.log (productos)


timerProductos();
    
} 

//FUNCIÓN CARGAR BUDINES

cargarBudines()






    


