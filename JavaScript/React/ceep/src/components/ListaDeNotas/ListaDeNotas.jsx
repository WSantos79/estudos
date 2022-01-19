import React, {Component} from "react";
import { CardNota } from "../CardNota/CardNota";
import "./style.css"

export class ListaDeNotas extends Component{
    constructor(){
        super();
        this.state = {notas: []}

        this.novaNota = this._novaNota.bind(this);
    }
    componentDidMount(){
        this.props.notas.inscrever(this.novaNota);
    }
    componentWillUnmount(){ // desmonta td
        this.props.nota.desinscrever(this._novaNota);
    }
    _novaNota(notas){
        this.setState({...this.state, notas});
    }
    render(){
        return(
            <ul className="lista-notas">
                {this.state.notas.map((nota, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            
                            <CardNota
                             indice={index}
                             titulo={nota.titulo}
                             texto={nota.texto}
                             categoria={nota.categoria}
                             apagarNota={this.props.apagarNota}
                             />
                        </li>
                    );
                })   }
                
            </ul>
        )
    }
    
}