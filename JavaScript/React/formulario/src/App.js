import React from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import { validarCPF, validarSenha, validarNome, validarSobrenome, validarCidade, validarEstado, validarCep } from "./models/cadastro"
import ValidacoesCadastro from './context/ValidacoesCadastro';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant='h3' component="h1" align="center">Formulário de cadastro</Typography>
      <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha, nome: validarNome, sobrenome: validarSobrenome, cidade: validarCidade, estado: validarEstado, cep: validarCep }}>

        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}
// validaçoes = primeira chave { para abrir um code javascript } e segunda chave para abrir um obj javascript

function aoEnviarForm(dados) {
  console.table(dados);
}

export default App;
