import React from "react";
import { NavBar } from "../navbar";
import { Slider } from "../slider";
import * as C from './styles';

export const Home = ()=>{

    return (
        <C.Basic>
            <NavBar/>
            <Slider/>
        </C.Basic>
    )
}