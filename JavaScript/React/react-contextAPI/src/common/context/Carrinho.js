import { createContext, useState, useContext, useEffect } from 'react';
import { UsuarioContext } from 'common/context/Usuario';


export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);
    const [qntProdutos, setQntProdutos] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);   
    const [saldoTotal, setSaldoTotal] = useState(0);
    const { saldo } = useContext(UsuarioContext);

    return (
        <CarrinhoContext.Provider value={{ carrinho, setCarrinho, qntProdutos, setQntProdutos, valorTotal, setValorTotal, saldo, saldoTotal, setSaldoTotal }}>
            {children}
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    const { carrinho, setCarrinho, qntProdutos, setQntProdutos, setValorTotal, valorTotal, saldo, saldoTotal, setSaldoTotal} = useContext(CarrinhoContext);
    

    function mudarQuantidade(id, qnt) {
        return carrinho.map(itemDoCarrinho => {
            if (itemDoCarrinho.id === id) itemDoCarrinho.quantidade += qnt;
            return itemDoCarrinho;
        })
    };

    function addProduto(novoProduto) {
        const temOProduto = carrinho.some(itemDoCarrinho => itemDoCarrinho.id === novoProduto.id);
        if (!temOProduto) {
            novoProduto.quantidade = 1;
            return (
                setCarrinho(carrinhoAnterior =>
                    [...carrinhoAnterior, novoProduto]
                )
            );
        }
        setCarrinho(mudarQuantidade(novoProduto.id, 1))
    }

    function removerProduto(id) {
        const produto = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id);

        if (typeof produto === "undefined") {
            return;
        }

        const ehoUltimo = produto.quantidade === 1;




        if (ehoUltimo) {
            return setCarrinho(carrinhoAnterior => carrinhoAnterior.filter(itemDoCarrinho => itemDoCarrinho.id !== id));
        }
        setCarrinho(mudarQuantidade(id, -1))
    }

    useEffect(() => {
        const {novoTotal, novaQuantidade } = carrinho.reduce((contador, produto) => 
        ({
            novaQuantidade: contador.novaQuantidade + produto.quantidade,
            novoTotal: contador.novoTotal + (produto.quantidade * produto.valor)
        }), {novaQuantidade: 0, novoTotal: 0});

        const novoSaldoTotal = saldo - novoTotal

        setSaldoTotal(novoSaldoTotal);
        setValorTotal(novoTotal);
        setQntProdutos(novaQuantidade);
    }, [carrinho])

    return {
        carrinho,
        setCarrinho,
        addProduto,
        removerProduto,
        qntProdutos,
        setQntProdutos,
        valorTotal,
        saldoTotal
    }
}