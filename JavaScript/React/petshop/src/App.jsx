import React from "react";
import "./assets/css/base/base.css";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Cabecalho from "./components/cabecalho";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pagina404 from "./paginas/400";

function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route path={"/sobre"}>
            <Sobre />
          </Route>
          <Route>
            <Pagina404 />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
