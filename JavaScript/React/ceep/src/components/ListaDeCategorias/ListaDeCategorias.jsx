import React, {Component} from "react";
import"./style.css"

export class ListaDeCategorias extends Component {
    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias.bind(this));
    }

    _novasCategorias(categorias){
        this.render(categorias);
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
                    {this.props.categorias.categorias.map((categoria, index) =>{
                        
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