class Producto{
    constructor(nombre, precio, stock){
    this.nombre = nombre; 
    this.precio = precio; 
    this.stock = stock; 
    }
    // metodo mostrarinfo()
    // metodo vender(cantidad)
    // metodo reabastecer(cantidad)
mostrarInfo(){
console.log(`El producto ${this.nombre} tiene un precio de ${this.precio} con un stock ${this.stock}`); 
}

vender(cantidad){
this.stock--; 
this.cantidad = this.stock; 
console.log(`vendidas ${this.cantidad}. Stock restante ${this.stock}`); 
}

rebastecer(cantidad){
this.stock++; 
console.log(`Stock aumentado. Nuevo stock ${this.stock}`); 
}
}

const tecladomecanico = new Producto("teclado mécanico", 9.99, 15); 
tecladomecanico.mostrarInfo(); 
tecladomecanico.vender(); 
tecladomecanico.vender(); 
tecladomecanico.vender(); 
tecladomecanico.mostrarInfo(); 
tecladomecanico.rebastecer(); 
tecladomecanico.mostrarInfo(); 
