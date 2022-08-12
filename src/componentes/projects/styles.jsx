import styled from "styled-components";

export const Basic = styled.div`
    min-width:30%;
    max-width:30%;
    min-height:20%;
    backdrop-filter: blur(2px);

    background-color:#fdfdfd8b;
    border-left: 5px solid #299eff;
    border-right: 2px solid #04508f;
    display:flex;
    padding:1%;
    justify-content:start ;
    flex-direction:column;
    align-items:center;
    margin:1% 10%;
    border-radius:15px;

    @media(max-width:1215px){
        margin:2% 2%;
        min-width:90%;
        }
`

export const Title = styled.p`
    font-size:1.4rem;
    color:black;
    text-transform:uppercase;
    margin-left:15px;
    overflow-y:hidden;
    text-overflow:ellipsis;
    word-break:normal;
    `
export const Desc = styled.p`
    font-size:0.8rem;
    color:black;
    `
export const Header = styled.header`
    width:100%;
    height:20%;
    /* background-color:grey; */
    display:flex;
    flex-wrap:nowrap;
    text-overflow:(2,2);
`

export const Middle = styled.section`
    width:100%;
    height:80%;
    /* background-color:blue; */
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;
    flex-wrap:nowrap;
    text-overflow:(2,2);
`
export const Footer = styled.footer`
    width:100%;
    height:20%;
    /* background-color:grey; */
    display:flex;
    align-items:center;
    justify-content:space-between;
`

export const Button = styled.a`
    width:100%;
    height:auto;
    border:none;
    font-size:0.7rem;
    background-color:#51575c;
    border-radius:15px;
    color:white;
    padding:1%;
    text-align:center;
    text-decoration:none;
    cursor: pointer;
`
export const Buttons = styled.div`
    width:40%;
    gap:10%;
    height:100%;
    overflow:clip;
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    cursor: pointer;
`