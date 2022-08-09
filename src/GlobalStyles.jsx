import { createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
    *{
        max-width:100vw;
        overflow-x: hidden;
        margin:0px;
        padding:0;
        box-sizing:border-box;
        font-family: 'Montserrat', sans-serif;
        scroll-behavior: smooth;
        

    }
    body{
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);

        
        /* background: linear-gradient(180deg, rgba(82,82,82,1) 0%, rgba(101,101,101,1) 42%, rgba(43,43,43,1) 100%); */
        ::-webkit-scrollbar-thumb
        {
        /* 3. CSS Styles*/
        width:22px;
        background-color: black;/*Gives background color to the scrollbar*/
        }
        
    }
    body::-webkit-scrollbar {
width: 5px;/*Gives you width to the scrollbar*/
}
body::-webkit-scrollbar-thumb {
background-color: black;/*Gives background color to the scrollbar*/
outline: 1px solid grey;
}
    
    .App{
        display:flex;
        flex-direction:column;
        align-items:center;
        min-height: 66.9vh;
        /* min-width: 460px; */
        
    }
    @media(max-width:500px) {
    .App{
        width: 100%;
    }
}
`

export default Global;