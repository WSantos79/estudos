import React from "react";
import { render, screen } from '@testing-library/react'
import App from './app';

describe('Componente principal', () => {
    describe('Quando eu abro o app do banco', () => {
        test('o nome é exibido', () => { // posso escrever como it ou test
            render(<App />); 
    
            expect(screen.getByText('ByteBank')).toBeInTheDocument();
        })
        it(' o saldo é exibido', () => {
            render(<App />);
        
            expect(screen.getByText('Saldo:')).toBeInTheDocument();
        })
        
        it('o botao de realizar transação é exibido', () => {
            render(<App />);
            expect(screen.getByText('Realizar operação')).toBeInTheDocument();
        })            
    })
    
})
    