import api from "./api"
import React from 'react';
import { render, screen} from '@testing-library/react'
import App from './App';

jest.mock('./api')

describe('Requisições para API', () => {
    test('Exibir lista de transações através da API', async () => {
        api.listaTransacoes.mockResolvedValue ( [
            {            
                "transacao": "deposito",
                "valor": "1.000",
                "data": "15/02/2022",
                "id": 10
            },
            {
                "transacao": "Saque",
                "valor": "10",
                "data": "16/02/2022",
                "id": 11              
            }
        ]);
        render(<App/>)

        //expect(await screen.findByText('saque')).ToBeInTheDocument();

        expect(screen.getByTestId('transacoes').children.length).toBe(2)

    })
})