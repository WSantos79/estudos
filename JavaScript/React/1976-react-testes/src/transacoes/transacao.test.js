import React from 'react';
import { render } from '@testing-library/react'
import Transacao from './Transacao'

describe('Componente de transação do estrato', () => {
    test('O snapshot do componente deve permaner sempre o mesmo', () => {
        const { container } = render(<Transacao
            data="08/09/2020"
            tipo="saque"
            valor="20.00"
            />)

        expect(container.firstChild).toMatchSnapshot();
    })
})