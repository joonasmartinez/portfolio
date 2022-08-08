import styled from "styled-components";

export const Slider = styled.div`
    width:100%;
    height:100%;
    color:white;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:space-between;
    max-height: 500px;
    z-index:9;
`

export const Row = styled.button`

    background-color:transparent;
    padding: 5px;
    border-radius:15px;
    border:none;
    display:flex;
    align-items:center;
    justify-content:space-around;
    column-gap:1rem;
    cursor: pointer;
    color:black;
    z-index:11;   
    opacity:0.5;
    :hover{
        opacity:1;
    }
`
export const Img = styled.img`
    transition: 1s;
    max-height: 50vh;
    width:1920px;
    height:auto;
    transform-origin: 65% 75%;
    max-width: 100%;
    position:relative;
    background-image: ${props => props.src ? 'url('+props.Content+')' : null};
    transition: 5s;
    animation: entrada 1s forwards ease;
    @keyframes entrada {
        from{
            opacity: 0;
            left:-150px;
        }to{
            opacity: 1;
            left:0;
        }
    }
    z-index:10;
`