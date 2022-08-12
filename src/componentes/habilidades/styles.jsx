import styled from "styled-components";

export const Basic = styled.section`
    width:20%;
    border-left:1px solid #000000a3;
    border-right:10px solid #000000a3;
    max-width:100%;
    height:auto;
    max-height:50%;
    min-height:30%;
    background-color:whitesmoke;
    padding: 0.5%;
    display:flex;
    justify-content:space-around;
    flex-direction:column;
    align-items:center;
    border-radius:15px;
    transition:1s;
    box-shadow:10px 20px 10px 1px #00000083;

    :hover{
        @media(min-width:1215px){ //Big screen
            
            transition:0.3s;
            border-right:1px solid #000000a3;
            border-left:10px solid #000000a3;
            box-shadow:15px 25px 10px 1px #00000083;
        }
    }
    
    @media(max-width:1215px){ //Mobile Screen
        font-size:1.5rem;
        box-shadow:0px 0px 10px 1px #00000083;
        border-right:0px solid #000000a3;
        border-left:0px solid #000000a3;
        :hover{
            box-shadow:0px 0px 0px 1px #00000083;
            transform:scale(1.5);
        }
    }
    

`
export const divTitle = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:5rem;
    overflow:hidden;
    color:black;
    @media(max-width:1215px){
        font-size:1.5rem;
    }
`

export const Title = styled.h4`
    color:black;
    font-size:1.5rem;
    overflow:hidden;
    @media(max-width:1215px){
        font-size:1rem;
    }
`
export const Desc = styled.p`
    max-height:40%;
    /* min-height:20%; */
    text-align:justify;
    color:black;
    font-size:1rem;
    @media(max-width:1215px){
        max-width:100%;
        /* word-break:break-all; */
        overflow:hidden;
        /* word-break:keep-all; */
        text-align:center;
        font-size:0.8rem;
    }

`
export const nivel = styled.p`
    color:black;
    opacity:0.6;
    text-align:center;
    @media(max-width:1215px){
        opacity:0.8;
        font-size:0.6rem;
    }
`