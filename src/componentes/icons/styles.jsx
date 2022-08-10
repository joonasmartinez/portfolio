import styled from "styled-components";

export const Basic = styled.section`
    width:100vw;
    min-height:20vh;
    padding: 0.5%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:10px;
    font-family: 'Dosis', sans-serif;
    font-family: 'Montserrat', sans-serif;
    color:black;
    position:absolute;
    bottom:5px;
    row-gap:2vh;
`

export const icons = styled.a`
    cursor: pointer;
    font-size:2rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-right: 10px;
    text-transform:none;
    color:black;
    `
export const GIcons = styled.a`
    height:auto;
    font-size:1.5rem;
    display:flex;
    justify-content:center;
    width:auto;
`