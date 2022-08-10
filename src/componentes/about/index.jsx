import React from "react";
import { useEffect, useState } from "react";
import * as C from './styles';

export const About = ()=>{

    const [avatar, setAvatar] = useState('');

    useEffect(()=>{
        const data = fetch('https://api.github.com/users/joonasmartinez', {method:'GET'}).then(res => res.json()).then(res => setAvatar(res.avatar_url));
        
    }, [avatar])

    return (
        <>
        {/* <NavBarFixed/> */}
        <C.Basic>
            <C.leftSide>
                <h3>{window.innerHeight}</h3>
                <C.Imagem src={avatar} />
                <C.Titulo>Jonas Alex Martinez</C.Titulo>
                <C.desc>Desenvolvedor atualmente focado para Web.<br/>
                Determinado a conhecer à fundo sobre programação.<br/>
                Me dedico todo tempo que tenho disponível à aprender!
                Aprendo colocando a mão na massa.</C.desc>
                
            </C.leftSide>

            <C.rightSide>
            <C.Titulo>Colocar setas para alterar entre telas dentro deste quadrado.</C.Titulo>
            </C.rightSide>
        </C.Basic>
        </>
    )
}