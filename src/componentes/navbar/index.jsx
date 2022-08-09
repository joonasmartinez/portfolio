import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import * as C from './styles'
// import Nature from '../../../public/imagens/nature.png'

export const NavBar = ({status, nav})=>{

    return (
        <C.Container>

                <C.menu>
                    <C.Titulo>Jonas Martinez - Web Developer</C.Titulo>
                </C.menu>

                <C.Smenu>
                    <C.SubTitle href='#home'>Home</C.SubTitle>
                    <C.SubTitle onClick={()=>nav(!status.about)}>Sobre mim</C.SubTitle>
                    <C.SubTitle>Portfolio</C.SubTitle>
                    <C.SubTitle>Descricao</C.SubTitle>
                    <C.SubTitle>Contato</C.SubTitle>
                </C.Smenu>

                <C.menu>
                <C.P><strong>É um prazer ter você por aqui. Está será uma bela forma de me apresentar para você.</strong> </C.P>
                </C.menu>
        </C.Container>
    )
}