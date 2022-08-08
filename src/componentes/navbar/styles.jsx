import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;
    height:auto;
    display:flex;
    justify-content:space-around;
    background-color:black;
`

export const menu = styled.nav`
    border-radius:15px;
    display:flex;
    justify-content:center;
    align-items:center;

`
export const Smenu = styled.nav`
    min-width:70%;
    background-color:#ffffff49;
    box-shadow: 0px 0px 15px 1px black;
    /* border-radius:15px; */
    display:flex;
    justify-content:space-around;
    column-gap: 51px;
    align-items:center;
    color:white;
    padding: 1%;

`

export const Titulo = styled.p`
    color:white;
    font-family: 'Dosis', sans-serif;
    font-size:2em;
    z-index: 10;
    `
export const SubTitle = styled.p`
    /* color:#acacacba; */
    border:1px solid white;
    font-family: 'Dosis', sans-serif;
    z-index: 9;
    /* min-width: 15rem; */
    padding:10px;
    cursor: pointer;
    transition:2s;
    transition-timing-function: ease;
    :hover{
        top: 1150px;
        transition:0.5s;
        padding:15px;
        font-size:1.5em;
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