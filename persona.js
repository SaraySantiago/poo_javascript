class Persona{
    constructor(nombre, edad){
        console.log("se esta creando una persona..."); 
        this.nombre = nombre; 
        this.edad = edad; 
}
// metodo saludar
    saludar(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad}`); 
    }

    // metodo cumplir años
    cumplirAnos(){
    this.edad++; 
    console.log(`felicidades ahora tienes ${this.edad} años`); 
    }
}

const ana = new Persona("Ana", 30);
const luis = new Persona("Luis", 30); 

ana.saludar();
luis.saludar();
ana.cumplirAnos(); 
ana.saludar(); 