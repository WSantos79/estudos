export class Categorias {
    constructor(){
        this.categorias =[];
        this._inscritos = []; // quem vai observar esta classe
    }

    inscrever(funcao){
        this._inscritos.push(funcao);
    }
    notificar(){
        this._inscritos.forEach(funcao => funcao(this.categorias));
    }
    adicionarCategoria(novaCategoria){
        this.categorias.push(novaCategoria);
        this.notificar();
    }
}