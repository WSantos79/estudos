import React, {Component} from "react";
import"./style.css"

export class ListaDeCategorias extends Component {
    constructor(){
        super();
        this.state = {categorias: []}


        this._novasCategorias = this._novasCategorias.bind(this); // para chamar  o mesmo bind na hora 
    }
    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias);
        // me inscreve em categorias e quando tiver alguma mudança execute a funçao _novasCategorias
    }
    componentWillUnmount(){ // desmonta td
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias(categorias){
        this.setState({...this.state, categorias});
    }
    _handleEventoInput(e){
        e.preventDefault();
        if(e.keyCode === 13){
            let valorCategoria = e.target.value;
            this.props.adicionarCategoria(valorCategoria);
            e.target.value = "";
        }
       
    }

    render(){
        return(
            <section className="lista-categorias"> 
                <ul className="lista-categorias_lista">
                    {this.state.categorias.map((categoria, index) =>{
                        
                        return <li key={index} className="lista-categorias_item">{categoria}</li> 
                    })}
                   
                </ul>
                <input 
                type="text"
                className="lista-categorias_input"
                placeholder="Insira uma categoria"
                onKeyUp={this._handleEventoInput.bind(this)}
                /> 
            </section>
        )
    }
}