import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import * as C from './styles'
// import Nature from '../../../public/imagens/nature.png'

export const NavBar = ({Dark})=>{

    return (
        Dark? <C.Container tema={Dark}> 
                <C.Smenu>
                    <C.SubTitle Dark onClick={()=>window.scrollTo(0, 0)}>Home</C.SubTitle>
                    <C.SubTitle Dark onClick={()=>window.scrollTo(0, window.innerHeight)}>Sobre mim</C.SubTitle>
                    <C.SubTitle Dark onClick={()=>window.scrollTo(0, window.innerHeight*2)}>PROJETOS</C.SubTitle>
                    {/* <C.SubTitle>Descricao</C.SubTitle> */}
                    <C.SubTitle onClick={()=>window.scrollTo(0, window.innerHeight*3)}>Contato</C.SubTitle>
                </C.Smenu>

        </C.Container> : <C.Container> 
                <C.Smenu>
                    <C.SubTitle onClick={()=>window.scrollTo(0, 0)}>Home</C.SubTitle>
                    <C.SubTitle onClick={()=>window.scrollTo(0, window.innerHeight)}>Sobre mim</C.SubTitle>
                    <C.SubTitle onClick={()=>window.scrollTo(0, window.innerHeight*2)}>PROJETOS</C.SubTitle>
                    {/* <C.SubTitle>Descricao</C.SubTitle> */}
                    <C.SubTitle onClick={()=>window.scrollTo(0, window.innerHeight*3)}>Contato</C.SubTitle>
                </C.Smenu>

        </C.Container>
    )
}