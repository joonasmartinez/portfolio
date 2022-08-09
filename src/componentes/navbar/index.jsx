import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import * as C from './styles'
// import Nature from '../../../public/imagens/nature.png'

export const NavBar = ()=>{

    return (
        <C.Container>

                <C.menu>
                    <C.Titulo>Jonas Martinez - Web Developer</C.Titulo>
                </C.menu>

                <C.Smenu>
                    <C.SubTitle>Home</C.SubTitle>
                    <C.SubTitle>Sobre</C.SubTitle>
                    <C.SubTitle>Portfolio</C.SubTitle>
                    <C.SubTitle>Descricao</C.SubTitle>
                    <C.SubTitle>Contato</C.SubTitle>
                </C.Smenu>

                <C.menu>
                <C.P><strong>Está é uma bela forma de você demonstrar seu trabalho. Simples e elegante.</strong> </C.P>
                </C.menu>
        </C.Container>
    )
}