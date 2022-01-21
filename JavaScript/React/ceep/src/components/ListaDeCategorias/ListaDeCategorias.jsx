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
        this.props.busca.inscrever(this.buscarCategoria);
        // me inscreve em categorias e quando tiver alguma mudança execute a funçao _novasCategorias
    }
    componentWillUnmount(){ // desmonta td
        this.props.categorias.desinscrever(this._novasCategorias);
    }
    buscarCategoria(buscar){
        console.log(buscar)
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
    _handleEventoBusca(e){
        e.preventDefault();
        let buscar = e.target.value;  
        let categoria = this.state.categorias;      
        this.props.search(categoria, buscar);
    }
    render(){
        return(
            <section className="lista-categorias"> 
                <ul className="lista-categorias_lista">
                    {this.state.categorias.map((categoria, index) =>{
                        
                        return <li key={index} className="lista-categorias_item">{categoria}</li> 
                    })}
                   
                </ul>
                <div className="lista-categoria-div"> 
                    <input 
                    type="text"
                    className="lista-categorias_input"
                    placeholder="Insira uma categoria"
                    onKeyUp={this._handleEventoInput.bind(this)}
                    /> 
                    <input className="lista-categoria-busca lista-categorias_input"
                     type="search"
                     placeholder="Busque por categoria"
                     onKeyUp={this._handleEventoBusca.bind(this)}
                     />
                </div>
            </section>
        )
    }
}