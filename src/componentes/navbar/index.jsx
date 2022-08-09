import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import * as C from './styles'
// import Nature from '../../../public/imagens/nature.png'

export const NavBar = ()=>{

    return (
        <C.Container>

                <C.Smenu>
                    <C.SubTitle onClick={()=>window.scrollTo(0, 0)}>Home</C.SubTitle>
                    <C.SubTitle onClick={()=>window.scrollTo(0, 969)}>Sobre mim</C.SubTitle>
                    <C.SubTitle onClick={()=>window.scrollTo(0, 969*2)}>Portfolio</C.SubTitle>
                    {/* <C.SubTitle>Descricao</C.SubTitle> */}
                    <C.SubTitle onClick={()=>window.scrollTo(0, 969*3)}>Contato</C.SubTitle>
                </C.Smenu>

        </C.Container>
    )
}