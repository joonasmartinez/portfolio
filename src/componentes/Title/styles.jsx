import styled from "styled-components"

export const Container = styled.nav`
    width: 100vw;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    z-index: 22;
`


export const menu = styled.nav`
    border-radius:15px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin: 2%;
`

export const Titulo = styled.h1`
    color:black;
    font-family: 'Montserrat', sans-serif;
    font-size:5em;
    z-index: 10;
    margin:0;
    text-align:start;
    word-wrap:break-word;
    transition:1s;
    @media(max-width:500px) {
        font-size:3em;
    }

    `
export const SubTitulo = styled.p`
    color:black;
    font-family: 'Montserrat', sans-serif;
    font-size:2em;
    z-index: 10;
    margin:0;
    
    @media(max-width:500px) {
        font-size:1em;
    }
    `