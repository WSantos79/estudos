import React from "react"

import alimentacao from '../assets/images/alimentacao.svg'
import saude from '../assets/images/saude.svg'
import outros from '../assets/images/outros.svg'
import Transporte from '../assets/images/transporte.svg'
import Utilidades from '../assets/images/utilidades.svg'
import { Icone } from '../Components/UI'



export default (type) => {
    const Images = {
        Restaurante: <Icone src={alimentacao} alt="Restaurante" />,
        Utilidades: <Icone src={Utilidades} alt="Utilidades" />,
        Saude: <Icone src={saude} alt="Saude" />,
        Transporte: <Icone src={Transporte} alt="Transporte" />,
        default: <Icone src={outros} alt="Outros" />
    };
    return Images[type] || Images.default;
};