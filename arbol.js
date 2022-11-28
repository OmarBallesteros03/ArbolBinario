class ArbolBinario {
    constructor(){
        this.raiz=null;
    }
    agregar(nuevo){
        if (this.raiz=null){
            this.raiz=nuevo;
        }else{
            this._agregar(nuevo,this.raiz);
        }
    }
    
_agregar(nuevo, nodoX){
        if(nuevo.dato<nodoX.dato){
            if(nodoX.izq==null){
                nodoX.izq=nuevo;
            }else{
                this._agregar(nuevo,nodoX.izq);
            }
        }else{
            if(nodoX.der==null){
                nodoX.der=nuevo;
            }else{
                this._agregar(nuevo,nodoX.der);
            }
        }
    }
    
}

class Nodo {
    constructor(dato){
        this.dato=dato;
        this.hder=null;
        this.hizq=null;

    }




    inOrder(){
        if(this.raiz==null){
            console.log(".");
        }else{
            _inOrderRec(this.raiz);
        }
    }
    _inOrderRec(nodoX){
        if(nodoX.izq!=null)
           this._inOrderRec(nodoX.hizq);
           console.log(nodoX.dato);
        
        if(nodoX.der!=null)
            this._inOrderRec(nodoX.hder);
            console.log(nodoX.dato);
        
    }

    preOrder(){
        if(this.raiz==null){
            return;
        }else{
            _preOrderRec(this.raiz);
        }
    }
    _preOrderRec(nodoX){
        let preString= ""
        
        preString=" "+nodoX+" "

        if(nodoX.hizq!=null){
            preString+=this.preOrder(nodoX.hizq)
        }

        if(nodoX.hder != null){
            preString+=this.preOrder(nodoX.hder)
        }

        return preString
    }
}

let arbol = new ArbolBinario();
let nodo = new Nodo(30);
arbol.agregar(nodo);


arbol.preOrder();