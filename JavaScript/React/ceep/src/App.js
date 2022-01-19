import React, { Component } from 'react';
import { FormularioCadastro } from './components/FormularioCadastro/FormularioCadastro';
import { ListaDeCategorias } from './components/ListaDeCategorias/ListaDeCategorias';
import { ListaDeNotas } from './components/ListaDeNotas/ListaDeNotas';
import "./assets/App.css";
import './assets/index.css'
import { Categorias } from './dados/Categorias';
import { ArrayDeNotas } from './dados/Notas';

class App extends Component {
  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
    //this.state = {
      //notas:[],
      //categorias:[]
    //}
  }
  /*criarNota(titulo, texto, categoria){
    const novaNota = {titulo, texto, categoria};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)  /// renderizar a tela
  } */

   /*apagarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({notas:arrayNotas})
  }*/
  /*adicionarCategoria(nomeCategoria){
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
    this.setState({categorias:novoArrayCategorias})
  }*/

  render(){ 
    return (
      <section className="conteudo">

        <FormularioCadastro 
        criarNota={this.notas.adicionarNota.bind(this.notas)}
        categorias={this.categorias}
        />
        <main>
          <ListaDeCategorias 
          categorias={this.categorias}
          adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          />
          <ListaDeNotas 
          notas={this.notas}
          apagarNota={this.notas.apagarNota.bind(this.notas)}
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