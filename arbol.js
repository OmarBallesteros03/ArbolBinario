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
        let vector = new Array(expresion);
        for(let i=0; i<expresion.length; i++){
            let cifra=expresion[i];
            if(cifra === '*' || cifra === '/'){
                let nodo = new Nodo(cifra);
                nodo.hizq = expresion[i-1];
                nodo.hder = expresion[i+1];
                vector.push(nodo);
                
                if(cifra === '+' || cifra === '-'){
                    nodo.hizq = expresion[i-1];
                    nodo.hder = expresion[i+1];
                    vector.push(nodo);
                }
            } else {
                let nodo = new Nodo(cifra);
                vector.push(nodo);
            }
        }
        this.raiz = vector.pop();
        return vector;
    }

    preOrder(){
        let res="";
        if(this.raiz==null){
            return null;
        }else{
            _preOrderRec(this.raiz);
            return res;
        }
    }

    _preOrderRec(nodoX){
        res+=`${nodoX.dato}`;
        if(nodoX.hizq!=null)
            this._preOrderRec(nodoX.hizq);
            console.log(nodoX.dato);
        
        if(nodoX.hder!=null)
            this._preOrderRec(nodoX.hder);
            console.log(nodoX.numero);
    }

    postOrder(){
        let res="";
         if(this.raiz==null){
            return null;
        }else{
            _postOrderRec(this.raiz);
            return res;
        }
    }

    _postOrderRec(nodoX){

        if(nodoX.hizq!=null)
            this._preOrderRec(nodoX.hizq);
            console.log(nodoX.dato);
        
        if(nodoX.hder!=null)
            this._preOrderRec(nodoX.hder);
            console.log(nodoX.numero);
        res+=`${nodoX.dato}`;
    }
}

let arbol = new ArbolBinario();
console.log(arbol.generarArbol("3+5*8-6/2"));
