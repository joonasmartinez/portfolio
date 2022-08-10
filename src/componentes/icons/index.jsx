import React from "react";
import * as C from './styles';
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

export const SocialIcons = ()=>{


    return (
        <C.Basic>
            <C.GIcons>

                <C.icons href="https://www.linkedin.com/in/joonasmartinez/" target='black'>
                    <BsLinkedin/>
                </C.icons>

                <C.icons href="https://github.com/joonasmartinez" target='black'>
                    <BsGithub />
                </C.icons>

                <C.icons href="https://www.instagram.com/joonasmartinez/" target='black'>
                    <BsInstagram />
                </C.icons>
            </C.GIcons>
                <C.GIcons>
                    Redes Sociais
                </C.GIcons>
        </C.Basic>
    )
}