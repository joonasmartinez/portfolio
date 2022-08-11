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
    display:flex;
    transition:1s;
    justify-content:space-between;
    align-items:center;
    font-size:2rem;
    margin: 10px;
    color:black;
    opacity:0;
    cursor: pointer;
    
    animation: entrarIcon 0.5s forwards ease;

    position:relative;

    :nth-child(1){
        animation-delay:0.4s;
    }
    :nth-child(2){

        animation-delay:0.6s;
    }
    :nth-child(3){
        
        animation-delay:0.8s;
    }
    :nth-child(4){

        animation-delay:1s;
    }

    @keyframes entrarIcon {
        from{
            opacity:0;
        }to{
            opacity:1;
        }
    }

    :hover{
        transition:0.2s;
        color:#299eff;
         
    }

    @keyframes Brilho {
        0%{
            box-shadow: 0px 0px 10px 5px gold;
        }
        50%{
            box-shadow: 0px 0px 10px 5px gold;
        }
        100%{
            box-shadow: 0px 0px 10px 5px gold;
        }
    }
    `
export const GIcons = styled.div`
    width:100%;
    height:auto;
    font-size:1.5rem;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
`