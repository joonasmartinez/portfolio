import styled from "styled-components";

export const Basic = styled.section`
    width:100vw;
    height:100vh;
    background-image:url('../../../public/imagens/background-aboutme.png');
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

`
export const rightSide = styled.div`

    width: 67%;
    height:95vh;
    /* border:1px solid #c2c2c2; */
    /* background-color:#4141413b; */
    /* backdrop-filter: blur(20px); */
    margin-left: 1%;
    display:flex;
    flex-direction:column;
    justify-content:start;
    /* align-items:center; */
    gap:5%;
    /* box-shadow: 0px 0px 10px 2px #000000a2; */
    /* border-radius:5px; */
    overflow-y:none;
    transition:2s;
`
export const qHabilidades = styled.div`
    width:auto;
    height:91%;
    max-height:91%;
    ::-webkit-scrollbar {
    width: 0px;/*Gives you width to the scrollbar*/
    }
    /* background-color:blue; */
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    /* flex-direction:column; */
    gap:1%;
    padding-bottom:1%;
`

export const Imagem = styled.img`
    transition:1s;
    position:relative;
    width: 90%;
    height:auto;
    /* border:5px solid black; */
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

`

export const TituloLeft = styled.h3`
    width:100%;
    text-align:center;
    font-size:1.5rem;
    color:black;
    padding:5%;
    background-color:#ffffffd1;
`
export const TituloRight = styled.h3`
    width:100%;
    height:auto;
    text-align:center;
    font-size:1.5rem;
    color:black;
    /* background-color:black; */
`

export const desc = styled.p`
    width:80%;
    font-size:1.2rem;
    color:black;
    text-align:center;
    width:100%;
`
export const descEnf = styled.p`
    color:black;
`
export const download = styled.a`
    width: 30%;
    display:flex;
    cursor: pointer;
    border-radius:5px;
    box-shadow:0px 0px 5px 1px #00000076;
    /* flex-direction:column; */
    height:auto;
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
`