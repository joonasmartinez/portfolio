import React from "react";
import * as C from './styles';
import Image from '../../../public/imagens/nature.png'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { FaArrowAltCircleLeft } from 'react-icons/fa'

export const Slider = ()=>{

    return (
        <C.Slider>
            <C.Row><FaArrowAltCircleLeft/><p>Atrás</p></C.Row>
            <C.Row><p>Avançar</p><FaArrowAltCircleRight/></C.Row>
            
        </C.Slider>
    )
}