import { Button, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
import ValidacoesCadastro from "../../context/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);
 
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ cep, endereco, numero, estado, cidade });
        }
      }}
    >
      <TextField
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        onBlur={validarCampos}
        error={!erros.cep.valido}
        helperText={erros.cep.texto}
        name="cep"
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
        required
      />

      <TextField
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
        name="endereco"
        id="endereco"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />

      <TextField
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        id="numero"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
        required
      />

      <TextField
        value={estado}
        onChange={(e) => setEstado(e.target.value)}
        onBlur={validarCampos}
        error={!erros.estado.valido}
        helperText={erros.estado.texto}
        name="estado"
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
        required
      />

      <TextField
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        onBlur={validarCampos}
        error={!erros.cidade.valido}
        helperText={erros.cidade.texto}
        name="cidade"
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
        required
      />

      <Button variant="contained" color="primary" type="submit" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
