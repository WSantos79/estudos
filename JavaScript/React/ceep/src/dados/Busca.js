export class Buscar {
    constructor(){
        this.buscas =[];
        this._inscritos = []; // quem vai observar esta classe
    }

    inscrever(funcao){
        this._inscritos.push(funcao);
    }
    desinscrever(funcao){
        this._inscritos = this._inscritos.filter(f => f !== funcao);
        // filtrar para vereficar quem dentro nao tem a funcao
    }
    notificar(){
        this._inscritos.forEach(funcao => funcao(this.buscas));
        // notificar todos os inscritos sobre a mudança, 
    }
    search(categoria, buscar){
              
        this.notificar(categoria.includes(buscar));
    }
}