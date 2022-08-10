import styled from "styled-components";

export const Basic = styled.section`
    width:100%;
    height:95vh;
    background-image:url('../../../public/imagens/1.png');
    /* background-color:#5c5c5c; */
    display:flex;
    justify-content:start;
    align-items:center;
`

export const leftSide = styled.div`

    width: 20%;
    height:90vh;
    background-color:#41414171;
    border:1px solid #c2c2c2;
    backdrop-filter: blur(20px);
    margin-left: 10%;
    display:flex;
    flex-direction:column;
    justify-content:start;
    align-items:center;
    row-gap:5%;
    box-shadow: 0px 0px 10px 2px #000000a2;
    border-radius:15px;
    transition:0.5s;
    /* animation: batimento 1s infinite linear; */
    
    @keyframes batimento {
        0%{
            
            box-shadow: 0px 0px 10px 2px #000000a2;
        }
        20%{
            box-shadow: 0px 0px 5px 0px #4e3737;
        }
        40%{
            
            box-shadow: 0px 0px 10px 6px #000000a2;
        }
        60%{
            box-shadow: 0px 0px 10px 2px #000000;

        }
    }

`
export const rightSide = styled.div`

    width: 65%;
    height:90vh;
    border:1px solid #c2c2c2;
    background-color:#41414171;
    backdrop-filter: blur(20px);
    margin-left: 1%;
    display:flex;
    flex-direction:column;
    justify-content:start;
    align-items:center;
    row-gap:5%;
    box-shadow: 0px 0px 10px 2px #000000a2;
    border-radius:15px;


`

export const Imagem = styled.img`
    width: 90%;
    height:auto;
    border:5px solid white;
    border-radius:50%;
    margin-top:30%;

`

export const Titulo = styled.h3`
    font-size:1.5rem;
    color:#fdc322;
    padding:5%;
`

export const desc = styled.p`
    width:80%;
    font-size:1rem;
    color:whitesmoke;
    text-align:justify;
`