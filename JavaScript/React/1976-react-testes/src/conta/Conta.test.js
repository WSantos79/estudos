import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Conta from './Conta';

describe('Componente de conta', () => {
    test('Exibir o saldo da conta com a formatação monetário', () => {
        render(<Conta saldo={1000} />)

        const saldo = screen.getByTestId('saldo-conta');
        const saldo2 = screen.getByText('R$ 1000')

        expect(saldo.textContent).toBe('R$ 1000')
    })
    test('Chama a função de realizar transação, quando o botão é clicado', () => {
        const funcaoRealizarTransacao = jest.fn()

        render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransacao}/>)

        fireEvent.click(screen.getByText('Realizar operação'));

        expect(funcaoRealizarTransacao).toHaveBeenCalled();
    })
})