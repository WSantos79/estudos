import { createContext, useState, useContext, useEffect } from 'react';



export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);
    const [qntProdutos, setQntProdutos] = useState(0);

    return (
        <CarrinhoContext.Provider value={{ carrinho, setCarrinho, qntProdutos, setQntProdutos }}>
            {children}
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    const { carrinho, setCarrinho, qntProdutos, setQntProdutos } = useContext(CarrinhoContext);

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
        const novaQuantidade = carrinho.reduce((contador, produto) => contador + produto.quantidade, 0);

        setQntProdutos(novaQuantidade);
    }, [carrinho, setQntProdutos])

    return {
        carrinho,
        setCarrinho,
        addProduto,
        removerProduto,
        qntProdutos,
        setQntProdutos
    }
}