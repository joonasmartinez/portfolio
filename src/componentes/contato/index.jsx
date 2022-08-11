import React from "react";
import * as C from './styles';
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'

export const Contato = ()=>{

    return (
        <C.Basic>
            <C.Icons>
                <C.icones href="https://www.linkedin.com/in/joonasmartinez/" target='black'>
                    <BsLinkedin/>
                </C.icones>

                <C.icones href="https://github.com/joonasmartinez" target='black'>
                    <BsGithub />
                </C.icones>

                <C.icones href="https://www.instagram.com/joonasmartinez/" target='black'>
                    <BsInstagram />
                </C.icones>

                <C.icones href="https://api.whatsapp.com/send?phone=5551985926466&text=Ol%C3%A1%2C%20Jonas!%20Mando%20esta%20mensagem%20atrav%C3%A9s%20do%20bot%C3%A3o%20WhatsApp%20de%20seu%20Web%20Site." target='blank'>
                    <BsWhatsapp/>
                </C.icones>
            </C.Icons>

            <C.Icons>
                Jonas Martinez
            </C.Icons>

            <C.Icons>
                <C.contato>(Web Developer) - 2022</C.contato>
            </C.Icons>

        </C.Basic>
    )
}