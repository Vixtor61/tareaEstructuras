var list = [];


var agregar = (list) => {
    let producto = {
        codigo: "",
        descripcion: "",
        typo: "",
        precioC: 0,
        precioV: 0,
        stock: 0
    
    };
    producto.codigo = prompt("ingrese el codigo");
    producto.descripcion = prompt("ingrese descripcion");
    producto.precioC = parseFloat( prompt("ingrese el precio"));
    producto.precioV = parseFloat( prompt("ingrese el precio de venta"));
    producto.stock = parseInt(prompt("ingrese el stock"));
    producto.typo = prompt("ingrese el tipo");
     
    list.push(producto);
}
var modificar = (codigo,list) => {
    list.forEach(element => {
        if(element.codigo == codigo){
            element.stock = parseInt(prompt("ingrese el nuevo stock")); 
        }
    });
}
var venta = (codigo,list) => {
    let a=0;
    list.forEach(element => {
        if(element.codigo == codigo){
            element.stock = element.stock-1; 
            console.log(element.precioV);
            a = element.precioV;
            
        }
        
    });
    
    return a;
    
}
var promedio = (ventas) => {
    let cont = 0;
    for(let i=0;i < ventas.length;i++){
        cont = cont + ventas[i];
    }
    return cont/ventas.length;
}
var showstock = (list) => {
    list.forEach(element => {
        if(element.stock == 0){
            console.log(element); 
        }
    });
}

var ventas = [];
while(n != 0){
console.log("1-agregar producto");
console.log("2- modificar stock");
console.log("3 registrar venta");
console.log("4 mostrar prom");
console.log("5- mostrar stock 0");
console.log("0 - salir");     
var n = parseInt( prompt("ingrese opcion"));
switch(n) {
    case 1:
    agregar(list);
    break;
    case 2:
    codigo = prompt("ingrese codigo");
    modificar(codigo,list);
    break;
    case 3:
    codigo = prompt("ingrese codigo");
    ventas.push(venta(codigo,list));
    console.log(ventas);
    break;
    case 4:

    console.log(promedio(ventas));
    break;
    case 5:
    showstock(list);
    break;
    default:
    break;
}
}
