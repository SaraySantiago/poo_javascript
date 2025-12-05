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
    return; 
    }

    vender(cantidad){
        this.stock -=cantidad;
        console.log(`vendidas ${cantidad}. Stock restante ${this.stock}`);
        return; 
    }

    rebastecer(cantidad){
        this.stock+=cantidad; 
        console.log(`Stock aumentado. Nuevo stock ${this.stock}`); 
         return; 
    }
}

const tecladomecanico = new Producto("teclado mécanico", 9.99, 15); 
tecladomecanico.mostrarInfo(); 
tecladomecanico.vender(5); 
tecladomecanico.mostrarInfo(); 
tecladomecanico.rebastecer(10); 
tecladomecanico.mostrarInfo(); 