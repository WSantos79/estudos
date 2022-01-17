import React, { Component } from 'react';
import { FormularioCadastro } from './components/FormularioCadastro/FormularioCadastro';
import { ListaDeCategorias } from './components/ListaDeCategorias/ListaDeCategorias';
import { ListaDeNotas } from './components/ListaDeNotas/ListaDeNotas';
import "./assets/App.css";
import './assets/index.css'

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      notas:[],
      categorias:[]
    }
  }
  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)  /// renderizar a tela
  } 

  apagarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({notas:arrayNotas})
  }
  adicionarCategoria(nomeCategoria){
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
    this.setState({categorias:novoArrayCategorias})
  }

  render(){ 
    return (
      <section className="conteudo">

        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <main>
          <ListaDeCategorias 
          categorias={this.state.categorias}
          adicionarCategoria={this.adicionarCategoria.bind(this)}
          />
          <ListaDeNotas 
          notas={this.state.notas}
          apagarNota={this.apagarNota.bind(this)}
          />  
        </main>
        
      </section>
    );
  }
}

export default App;

/* new ListaDeNotas({nota:this.notas}) sempre que tenho uma tag, é a mesma coisa que estar dando new object...

 ex do <ListaDeNotas notas={this.state.notas}/> 
       <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
 */