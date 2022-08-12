import React, {useState} from "react";
import { SocialIcons } from "../icons";
import { Title } from "../Title";
import * as C from './styles';

export const Home = ()=>{


    return (
        <C.Basic Img={'../../public/imagens/background.png'}>
            <Title/>
            <SocialIcons/>
        </C.Basic>
    )
}