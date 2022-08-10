import React, {useState} from "react";
import { SocialIcons } from "../icons";
import { Title } from "../Title";
import * as C from './styles';

export const Home = ()=>{


    return (
        <C.Basic>
            <Title/>
            <C.Imagem src='../../public/imagens/background.png'/>
            <SocialIcons/>
        </C.Basic>
    )
}