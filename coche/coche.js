class Coche{
constructor(marca, modelo){
this.marca = marca; 
this.modelo = modelo;
this.velocidad = 0; 
}

acelerar(cantidad){
this.velocidad+=cantidad; 
console.log(`se ha acelerado la velocidad: ${this.velocidad}`);
}

frenar(cantidad){
this.velocidad= Math.max(0, this.velocidad-cantidad); 
console.log(`se ha frenado la velocidad: ${this.velocidad}`);
}

obtenerInfo(){
    console.log(`${this.marca} - ${this.modelo} - ${this.velocidad}`);
}

}


const coche1 = new Coche("marca", "modelo");
coche1.obtenerInfo();  
coche1.acelerar(20);
coche1.frenar(10); 
coche1.obtenerInfo();