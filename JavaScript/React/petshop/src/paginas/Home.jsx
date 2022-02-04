import React from 'react'
import ListaCategorias from '../components/listaCategorias'
import ListaPost from '../components/listaPost'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>  
      <ListaCategorias />
      <ListaPost url={'/posts'}/>
    </main>
  )
}

export default Home
