import React from "react"

import alimentacao from '../assets/images/alimentacao.svg'
import saude from '../assets/images/saude.svg'
import outros from '../assets/images/outros.svg'
import Transporte from '../assets/images/transporte.svg'
import Utilidades from '../assets/images/utilidades.svg'
import { IconeTema } from '../Components/UI'



export default (type) => {
    const Images = {
        Restaurante: <IconeTema src={alimentacao} alt="Restaurante" />,
        Utilidades: <IconeTema src={Utilidades} alt="Utilidades" />,
        Saude: <IconeTema src={saude} alt="Saude" />,
        Transporte: <IconeTema src={Transporte} alt="Transporte" />,
        default: <IconeTema src={outros} alt="Outros" />
    };
    return Images[type] || Images.default;
};