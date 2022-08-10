import styled from "styled-components";

export const Container = styled.nav`
    width: 100vw;
    height:5vh;
    box-shadow: 0px 0px 15px 1px black;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    background-color:#ffffff;
    position:fixed;
    top:0;
    z-index:1000;
`

export const menu = styled.nav`
    border-radius:15px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 2%;
`
export const Smenu = styled.nav`
    width:70%;
    background-color:transparent;
    display:flex;
    justify-content:space-around;
    column-gap: 51px;
    align-items:center;
    color:black;
    padding: 0.5%;

`

export const Titulo = styled.h1`
    color:black;
    font-family: 'Dosis', sans-serif;
    font-size:2em;
    z-index: 10;
    `
export const SubTitle = styled.button`
    color:#000000;
    /* font-family: 'Dosis', sans-serif; */
    z-index: 9;
    background-color:transparent;
    border:none;
    padding:1px;
    cursor: pointer;
    text-transform:uppercase;
    transition:2s;
    transition-timing-function: ease;
    font-size:1.3em;
    position:sticky;
    :hover{
        top: 1150px;
        transition:0.5s;
        color:#444444;
        /* padding:15px; */
        /* font-size:1.8em; */
    }
    /* font-family: 'Montserrat', sans-serif; */
`

export const Button = styled.button`
    padding: 1em;
    color:white;
    background-color:transparent;
    border:none;
    cursor: pointer;
`

export const P = styled.p`
    /* transition:2s; */
    color:black;
    font-size:1.1em;
    width:70%;
    height:auto;
    text-align:center;
    animation: aparecer 2s forwards ease;
    position:relative;
    z-index:0;
    @keyframes aparecer {
        from{
            opacity:0;
            left:-150px;
        }to{
            opacity:1;
            left:0px;

        }
    }
`