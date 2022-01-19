import React, {Component} from "react";
import "./style.css"

export class FormularioCadastro extends Component {
    constructor(props){
        super(props);
        this.titulo = "";
        this.texto = "";
        this.categoria ="Sem Categoria";
        this.state = {categorias: []}


        this._novasCategorias = this._novasCategorias.bind(this); // para chamar  o mesmo bind na hora 
    }
    
    componentDidMount(){ // inicia depois de renderizr a td a pag        
        this.props.categorias.inscrever(this._novasCategorias);
        // me inscreve em categorias e quando tiver alguma mudança execute a funçao _novasCategorias
    }
    componentWillUnmount(){ // desmonta td
        this.props.categorias.desinscrever(this._novasCategorias);
    }
    _novasCategorias(categorias){
        this.setState({...this.state, categorias});
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

                    { this.state.categorias.map((categoria, index) => {
                        return <option key={index}>{categoria}</option>
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