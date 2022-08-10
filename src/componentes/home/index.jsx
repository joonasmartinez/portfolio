import React, {useState} from "react";
import { About } from "../about";
import { SocialIcons } from "../icons";
import { NavBar } from "../navbar";
import { Slider } from "../slider";
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