import styled from "styled-components";

export const Basic = styled.section`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position: center;
    background-image:url('../public/imagens/background-aboutme.png');
    display:flex;
    justify-content:start;
    align-items:center;
    position:relative;
    animation: open 2s forwards ease;
    @keyframes open {
        from{
            top:-15px;
            opacity:0;
        }to{
            
            top:0px;
            opacity:1;
        }
    }
    @media(max-width:1215px) {
        height:100vh;
        flex-direction:column;
    }
`

export const leftSide = styled.div`

    width: 20%;
    height:95vh;
    background-color:#4141412d;
    border:1px solid #c2c2c2;
    backdrop-filter: blur(2px);
    margin-left: 10%;
    display:flex;
    flex-direction:column;
    justify-content:start;
    align-items:center;
    row-gap:5%;
    box-shadow: 0px 15px 10px 5px #000000a2;
    border-radius:5px;
    transition:0.5s;

    @media(max-width:1215px) {
        width: auto;
        row-gap:5%;
        margin-left:0;
        padding:5% 0;
        align-items:center;
        box-shadow: 0px 0px 10px 1px #000000a2;
        height:80vh;
    }

`
export const rightSide = styled.div`

    width: 67%;
    height:95vh;
    margin-left: 1%;
    display:flex;
    flex-direction:column;
    justify-content:start;
    gap:5%;
    /* overflow-y:visible; */
    transition:2s;
    @media(max-width:1215px) {
        width: 100vw;
        /* overflow:scroll; */
        height:20vh;
        margin-top:10%;
    }
    
`
export const qHabilidades = styled.div`
    width:auto;
    height:91%;
    max-height:91%;
    ::-webkit-scrollbar {
        width: 0px;
    }
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    /* flex-direction:column; */
    gap:1%;
    /* padding-bottom:1%; */
    @media(max-width:1215px) {
        width:auto;
        height:100vh;
        max-height:auto;
        flex-direction:column;
        /* overflow-y:visible; */
        overflow-x:scroll;
        gap:5%;
        flex-wrap:wrap;
    }
`

export const Imagem = styled.img`
    transition:1s;
    position:relative;
    width: 90%;
    height:auto;
    box-shadow:0px 0px 5px 0.1px black;
    border-radius:50%;
    margin-top:30%;
    :hover{
        transition:0.5s;
        box-shadow:0px 5px 15px 0.1px white;
    }

    animation: batimento 3s infinite linear;
    
    @keyframes batimento {
        0%{
            
            box-shadow: 0px 0px 10px 2px #000000a2;
        }
        40%{
            
            box-shadow: 0px 0px 10px 7px #000000a2;
        }
        100%{
            box-shadow: 0px 0px 10px 2px #000000a2;
        }
    }

    @media(max-width:1215px) {
        width: 70%;
        margin-top:5%;
        margin-bottom:3%;
    }

`

export const TituloLeft = styled.h3`
    width:100%;
    text-align:center;
    font-size:1.5rem;
    overflow:hidden;
    color:black;
    padding:5%;
    background-color:#ffffffd1;
    @media(max-width:1215px){
        padding:1%;
    }
`
export const TituloRight = styled.h3`
    width:100%;
    height:auto;
    overflow:visible;
    text-align:center;
    font-size:1.5rem;
    color:black;
    /* background-color:black; */
`

export const desc = styled.p`
    font-size:1.2rem;
    color:black;
    text-align:center;
    width:100%;
    margin:5px;
    overflow:visible;
    
`
export const descEnf = styled.p`
    color:black;
`
export const download = styled.a`
    width: 30%;
    height:auto;
    overflow:visible;
    display:flex;
    cursor: pointer;
    border-radius:5px;
    box-shadow:0px 0px 5px 1px #00000076;
    /* flex-direction:column; */
    background-color: #299eff;
    align-items:center;
    justify-content:space-around;
    border:none;
    font-size:1rem;
    padding:5px;
    text-decoration:none;
    color:white;
    :active{
        background-color: #006bc2;
        box-shadow:0px 0px 10px 1px #000000cf;
    }

    @media(max-width:1215px){
    }
`

export const Arrastar = styled.div`
    opacity:0;
    @media(max-width:1215px){
        font-size:1.5rem;
        opacity:1;
        width:auto;
        /* top:0; */
        /* height:10%; */
        color:red;
        position:relative;
        text-align:right;
        /* bottom:3%; */
        /* background-color:black; */
    }
`