import React, {Component} from "react";
import "./style.css"

export class FormularioCadastro extends Component {
    constructor(props){
        super(props);
        this.titulo = "";
        this.texto = "";
        this.categoria ="Sem Categoria";
    }
    _handleMudancaCategoria(e){
        e.stopPropagation();
        this.categoria = e.target.value;
    }

    _handleMudancaTitulo(event){
        event.stopPropagation();
        this.titulo = event.target.value;        
    }
    _handleMudancatexto(event){
        event.stopPropagation();
        this.texto = event.target.value;
    }
    _criarNota(event){
        event.preventDefault();
        event.stopPropagation();
        this.props.criarNota(this.titulo, this.texto, this.categoria);
        {
        document.querySelector("input").value = ""; 
        document.querySelector("textarea").value = "";              
        }
    }
    render(){
        return(
            <form className="form-cadastro"
                onSubmit={this._criarNota.bind(this)}
            >
                <select 
                onChange={this._handleMudancaCategoria.bind(this)}
                 className="form-cadastro_input">

                    <option>Sem Categoria</option>

                    { this.props.categorias.map(categoria => {
                        return <option>{categoria}</option>
                    })}
                </select>
                <input 
                className="form-cadastro_input"
                type="text"
                placeholder='Título'
                onChange={this._handleMudancaTitulo.bind(this)}
                />                
                <textarea 
                rows={15}
                className="form-cadastro_input"
                placeholder='Escreva sua nota...'  
                onChange={this._handleMudancatexto.bind(this)}              
                ></textarea>
                <button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
            </form>
        )
    }
}