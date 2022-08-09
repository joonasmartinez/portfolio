import React, {useState} from "react";
import { About } from "../about";
import { NavBar } from "../navbar";
import { Slider } from "../slider";
import { Title } from "../Title";
import * as C from './styles';

export const Home = ()=>{


    return (
        <C.Basic id="home">
            <Title/>
            <NavBar/>
            <Slider/>
        </C.Basic>
    )
}