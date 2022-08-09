import React, {useState} from "react";
import { About } from "../about";
import { NavBar } from "../navbar";
import { Slider } from "../slider";
import * as C from './styles';

export const Home = ()=>{

    const [home, setHome] = useState(true);
    const [nav, setNav] = useState(true);
    const [about, setAbout] = useState(false);

    return (
        <C.Basic id="home">
            <NavBar status={{about,home}} nav={[(status)=> {setAbout(status)}, (status)=> {setHome(status)}]} />
            {home && <Slider/>}
            {about && <About/>}
        </C.Basic>
    )
}