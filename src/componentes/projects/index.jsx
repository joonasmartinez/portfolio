import React from "react";
import * as C from './styles';

export const Project = ({Title='-', Desc='-', Updated='-', Repo='', Home=''})=>{

    return (
            <C.Basic>

                <C.Header>
                    <C.Title>{Title}</C.Title>
                </C.Header>

                <C.Middle>
                    <p>Descrição: {Desc}</p>

                </C.Middle>

                <C.Footer>
                    <C.Desc>Last Updated: {Updated}</C.Desc>
                    <C.Buttons>
                        <C.Button href={Repo} target={'blank'}>Repositório</C.Button>
                        { Home && <C.Button href={Home} target={'blank'}>Ver online</C.Button>}
                    </C.Buttons>
                </C.Footer>

            </C.Basic>
    )
}