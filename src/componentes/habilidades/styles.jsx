import styled from "styled-components";

export const Basic = styled.section`
    width:20%;
    border-left:1px solid #000000a3;
    border-right:10px solid #000000a3;
    /* max-width:30%; */
    height:auto;
    max-height:30%;
    min-height:30%;
    background-color:whitesmoke;
    padding: 0.5%;
    display:flex;
    justify-content:space-around;
    flex-direction:column;
    align-items:center;
    box-shadow:0px 20px 10px 1px #00000083;
    border-radius:15px;
    transition:1s;
    :hover{
        transition:0.3s;
        border-right:1px solid #000000a3;
        border-left:10px solid #000000a3;
        box-shadow:10px 20px 10px 1px #00000083;
    }

`
export const divTitle = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:5rem;
    color:black;
`

export const Title = styled.h4`
    color:black;
    font-size:1.5rem;
`
export const Desc = styled.p`
    max-height:40%;
    /* min-height:20%; */
    text-align:justify;
    color:black;
    font-size:1rem;
`
export const nivel = styled.p`
    color:black;
    opacity:0.6;
    text-align:center;
`