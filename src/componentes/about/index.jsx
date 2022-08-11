import React from "react";
import { useEffect, useState } from "react";
import * as C from './styles';
import { FaFileDownload } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiStyledcomponents } from 'react-icons/si'
import { FaGit } from 'react-icons/fa'
import { FaNpm } from 'react-icons/fa'
import { IoLogoFirebase } from 'react-icons/io5'
import { Habilidade } from "../habilidades";

export const About = ()=>{

    const [avatar, setAvatar] = useState('');

    useEffect(()=>{
        const data = fetch('https://api.github.com/users/joonasmartinez', {method:'GET'}).then(res => res.json()).then(res => setAvatar(res.avatar_url));
    }, [avatar])

    return (
        <><h3>{window.innerHeight}</h3>
        <C.Basic>
            <C.leftSide>
              
                <C.Imagem src={avatar} />
                <C.TituloLeft>Jonas Alex Martinez</C.TituloLeft>
                <C.desc>Desenvolvedor atualmente focado para desenvolvimento Web.<br/>
                <C.descEnf><strong>Apaixonado pela tecnologia!</strong></C.descEnf>
                Dedico todo tempo que tenho disponível à aprender!<br/>
                Aprendo colocando a mão na massa.</C.desc>
                <C.download href='https://drive.google.com/file/d/1AZelIgn75ssi2rP-ar6TlqGod3dH1y3s/view?usp=sharing' target={'blank'}><FaFileDownload/>Curriculo</C.download>
                
            </C.leftSide>

            <C.rightSide>

            <C.TituloRight>Conhecimentos Técnicos</C.TituloRight>
                <C.qHabilidades>

                    <Habilidade Title={'HTML'} Desc={'HTML'} Nivel={'Avançado'} Icon={<FaHtml5/>}/>
                    <Habilidade Title={'CSS'} Desc={'CSS'} Nivel={'Avançado'} Icon={<FaCss3Alt/>}/>
                    <Habilidade Title={'JavaScript'} Desc={'JavaScript'} Nivel={'Avançado'} Icon={<IoLogoJavascript/>}/>
                    <Habilidade Title={'React'} Desc={'React'} Nivel={'Avançado'} Icon={<FaReact/>}/>
                    <Habilidade Title={'Styled-Component'} Desc={'Styled-Component'} Nivel={'Avançado'} Icon={<SiStyledcomponents/>}/>
                    <Habilidade Title={'Git'} Desc={'Git'} Nivel={'Moderado'} Icon={<FaGit/>}/>
                    <Habilidade Title={'NPM'} Desc={'NPM'} Nivel={'Basico'} Icon={<FaNpm/>}/>
                    <Habilidade Title={'FireBase'} Desc={'FireBase'} Nivel={'Moderado'} Icon={<IoLogoFirebase/>}/>
       

                </C.qHabilidades>

            </C.rightSide>
        </C.Basic>
        </>
    )
}