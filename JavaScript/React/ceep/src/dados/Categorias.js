export class Categorias {
    constructor(){
        this.categorias =[];
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
        this._inscritos.forEach(funcao => funcao(this.categorias));
        // notificar todos os inscritos sobre a mudança, 
    }
    adicionarCategoria(novaCategoria){
        this.categorias.push(novaCategoria);
        this.notificar();
    }
}