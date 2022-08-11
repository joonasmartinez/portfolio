import React from "react";
import * as C from './styles';
import {FaReact} from 'react-icons/fa'

export const Habilidade = ({Title, Desc, Nivel, Icon})=>{


    return (
        <C.Basic>
            <C.divTitle> {Icon} <C.Title></C.Title></C.divTitle>
            
            <C.Desc>{Desc}</C.Desc>
            <C.nivel>{Nivel}</C.nivel>
        </C.Basic>
    )
}