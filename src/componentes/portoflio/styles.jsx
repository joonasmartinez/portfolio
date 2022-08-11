import styled from "styled-components";

export const Basic = styled.section`
    min-width:90%;
    width:auto;
    /* overflow-x:scroll; */
    max-height:100vh;
    height:100vh;
    font-size:1rem;
    /* background-color:#474747; */
    /* padding: 0.5%; */
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    flex-wrap:wrap;
    `

export const Window = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const RowIcon = styled.button`
    width:100%;
    height:25%;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:transparent;
    border:none;
    font-size:2rem;
    cursor: pointer;

    :hover{
        color:white;
        background-color:black;
    }
`