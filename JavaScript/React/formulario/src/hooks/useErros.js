import React, { useState } from "react";

export default function useErros(validacoes) {
    const estadoInicial = criarEstadoInicial(validacoes);
    const [erros, setErros] = useState(estadoInicial);

    function validarCampos(e) {
        const { name, value } = e.target;
        const novoEstado = { ...erros };
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }

    function possoEnviar() {
        for (let i in erros) {
          if (!erros[i].valido) {
            return false;
          }
        }
        return true;
      }

    return [erros, validarCampos, possoEnviar];
}

function criarEstadoInicial(validacoes){
    const estadoInicial = {};
    for(let i in validacoes){
        estadoInicial[i] = { valido: true, texto: "" };
    }
    return estadoInicial;
}