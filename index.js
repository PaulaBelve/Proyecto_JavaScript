
      // 1er DESAFIO OBLIGATORIO - SIMULADOR CARRITO DE COMPRAS
     // RESOLVER EL TOTAL DEL PEDIDO DEL CLIENTE 

     function Saludo () {
      alert ("Bienvenida/o a delfos cocina!")
     }

     // MULTIPLICAR CANTIDAD CON PRECIO, DEPENDIENDO DE LA CANTIDAD, VA A DAR EL TOTAL

     function calcularPedido () {
       
      let cantidad = parseInt(prompt("Ingrese la cantidad de budines a pedir"))
      let precio = 1000
      
      let resultado = cantidad * precio ;
      return resultado
      
      }

    function ValidarEnvio (total) {
   
    if (total <= 2000) {alert ("Debe abonar el recargo del envio")} 
    
    else if (total >=5000) {alert ("Su pedido es mayor a 5000, el envio es sin cargo")} }

    // INVOCACIÓN DE LAS FUNCTION

    Saludo ()
    
    let total = calcularPedido ()

    ValidarEnvio (total)

    alert ("Gracias por su compra! El total del pedido es " + total)
     
    
    
    



  










 







     



      

    






