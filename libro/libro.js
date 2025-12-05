class Libro{
constructor(titulo, autor, paginas){
this.titulo = titulo; 
this.autor = autor; 
this.paginas = paginas; 
this.leido = false; 
}

marcarComoLeido(){
this.leido = true;
console.log(`${this.titulo} ha sido marcado como leido`); 
}

mostrarResumen(){
let resumen = `${this.titulo} por ${this.autor} tiene ${this.paginas} paginas`;
if(this.leido){
    resumen += " (leido)"; 
}
console.log(resumen); 
}
}

const libro1 = new Libro("1948", "george orswell", 328); 
libro1.mostrarResumen(); 
libro1.marcarComoLeido(); 
libro1.mostrarResumen(); 