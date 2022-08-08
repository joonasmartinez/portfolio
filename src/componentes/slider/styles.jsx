import styled from "styled-components";

export const Slider = styled.div`
    width:99vw;
    height:50vh;
    margin: 5px;
    padding: 5%;
    border-radius:15px;
    color:white;
    background-image: ${(props) => props.image ? props.image : 'grey'};
    display:flex;
    align-items:center;
    justify-content:space-between;
    /* max-width: 1000px; */
    max-height: 500px;
`

export const Row = styled.button`

    background-color:transparent;
    border:none;
    display:flex;
    align-items:center;
    justify-content:space-around;
    column-gap:1rem;
    cursor: pointer;
    opacity:0.5;
    color:white;
    
    :hover{
        opacity:1;
    }
`