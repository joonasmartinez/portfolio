import React from "react";
import * as C from './styles';
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'

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
                <C.icons href="https://api.whatsapp.com/send?phone=5551985926466&text=Ol%C3%A1%2C%20Jonas!%20Mando%20esta%20mensagem%20atrav%C3%A9s%20do%20bot%C3%A3o%20WhatsApp%20de%20seu%20Web%20Site." target='blank'>
                    <BsWhatsapp/>
                </C.icons>
            </C.GIcons>
                <C.GIcons>
                Redes Sociais
                </C.GIcons>
        </C.Basic>
    )
}