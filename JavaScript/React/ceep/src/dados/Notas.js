export class ArrayDeNotas {
    constructor(){
        this.notas = [];   
        this._inscritos = [];       
    }

    adicionarNota(titulo, texto, categoria){
        const novaNota = new Nota(titulo, texto, categoria);
        this.notas.push(novaNota); 
    }

    apagarNota(index){
        this.notas.slice(index ,1)
    }

    inscrever(funcao){
        this._inscritos.push(funcao);
    }
    notificar(){
        this._inscritos.forEach(funcao => funcao(this.categorias));
    }
}

class Nota {
    constructor(titulo, texto, categoria){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}