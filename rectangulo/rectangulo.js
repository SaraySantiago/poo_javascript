class Rectangulo{
constructor(ancho, alto){
this.ancho = ancho; 
this.alto = alto; 
}

calcularArea(){
return this.ancho * this.alto; 
}

calcularPerimetro(){
return 2*(this.ancho+this.alto);
}

esChico(){
const area = this.calcularArea(); 
return area < 100;
}

escalar(factor){
this.ancho *= factor; 
this.alto *= factor; 
console.log(`escalado por ${this.factor}. nuevas dimensiones: ancho ${this.ancho} - alto: ${this.alto}`);
}

compararCon(otroRectangulo){
const areaPropia = this.calcularArea(); 
const areaOtra = otroRectangulo.calcularArea(); 

if(areaPropia > areaOtra){
    return "este rectangulo es mas grande";
} else if(areaPropia < areaOtra){
    return "el otro es mas grande";
} else{
    return "son iguales"; 
}
}

}

const rectangulo1 = new Rectangulo(100, 50); 
const rectangulo2 = new Rectangulo(200, 100); 

console.log(rectangulo1.calcularArea());
console.log(rectangulo1.calcularPerimetro());
console.log(rectangulo1.esChico());
console.log(rectangulo1.compararCon(rectangulo2)); 