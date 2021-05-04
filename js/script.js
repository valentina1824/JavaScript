function imprimir(){

    let impresion ="" 
    impresion = document.getElementById("name").value + "\n"
    impresion += document.getElementById("lastName").value + "\n"
    impresion += document.getElementById("age").value + "\n"
    impresion += document.getElementById("course").value + "\n"

    alert(impresion)
    console.log("Hola " + "a " + "todos")
}
console.log("Funcionando")