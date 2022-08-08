import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;
    height:auto;
    display:flex;
    flex-direction:column;
    row-gap: 50%;
    /* background-color:blue; */
`

export const menu = styled.nav`

    /* box-shadow: 10px 10px 10px 5px black; */
    border-radius:15px;
    display:flex;
    justify-content:center;
    align-items:center;

`
export const Smenu = styled.nav`
    /* background-color:#a705054a; */
    /* box-shadow: 10px 10px 10px 5px black; */
    border-radius:15px;
    display:flex;
    margin-top:1%;
    justify-content:space-around;
    align-items:center;
    color:white;

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
    padding:10px;
    cursor: pointer;
    transition:2s;
    transition-timing-function: ease;
    :hover{
        transition:0.2s;
        /* position:absolute; */
        padding:50px;
        font-size:1.5em;
    }
    /* font-family: 'Montserrat', sans-serif; */
`