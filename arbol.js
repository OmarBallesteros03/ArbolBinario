class Nodo {
    constructor(dato){
        this.dato=dato;
        this.hder=null;
        this.hizq=null;
    }

}

class ArbolBinario {
    constructor(){
        this.raiz=null;
    }

    generarArbol(expresion){
        let vector = new Array;
        for(let i=0; i<expresion.length; i++){
            let cifra=expresion[i];
            if(cifra === '+' || cifra === '-' || cifra === '*' || cifra === '/'){
                let nodo = new Nodo(cifra);
                nodo.der = vector.pop();
                nodo.izq = vector.pop();
                vector.push(nodo);
            } else {
                let nodo = new Nodo(cifra);
                vector.push(nodo);
            }
        }
        this.raiz = vector.pop();
        return vector;
    }
}



let arbol = new ArbolBinario();
console.log(arbol.generarArbol("3+5*8-6/2"));
