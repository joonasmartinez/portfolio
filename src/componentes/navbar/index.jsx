import React from "react";
import * as C from './styles'

export const NavBar = ()=>{

    return (
        <C.Container> 
                <C.Smenu>
                    <C.SubTitle onClick={()=>window.scrollTo(0, 0)}>Home</C.SubTitle>
                    <C.SubTitle onClick={()=>window.scrollTo(0, window.innerHeight)}>Sobre mim</C.SubTitle>
                    <C.SubTitle onClick={()=>window.scrollTo(0, window.innerHeight*2)}>PROJETOS</C.SubTitle>
                    <C.SubTitle onClick={()=>window.scrollTo(0, window.innerHeight*3)}>Contato</C.SubTitle>
                </C.Smenu>

        </C.Container>
    )
}