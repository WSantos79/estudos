import React from "react";
import { Box, Botao } from "../UI";
import { extratoLista } from "../../info";
import Items from "../Items";

export default () => {
    return (
        <Box>
            {extratoLista.updates.map(({id, type, from, value, date}) => {
                return (                  
                    <Items key={id} type={type} from={from} value={value} date={date}></Items>
                );
            })}
            <Botao>Ver Mais</Botao>
        </Box>
    )
}