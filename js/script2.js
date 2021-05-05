function comprar() {
   let gansito = false;
   let chocoBar = false;

   if(gansito === true) {
       alert("Toma tu gansito");
   }

   //|| = ó / && = y
   if (chocoBar === true &&  gansito !== true) {
    alert("Toma tu barra de chocorramo");
   } 
   
   if (chocoBar === false && gansito === false) {
    alert("No hay ninguno");
   }  
}

