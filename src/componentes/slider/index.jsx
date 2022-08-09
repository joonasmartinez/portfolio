import React, {useState, useEffect} from "react";
import * as C from './styles';
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { FaArrowAltCircleLeft } from 'react-icons/fa'

export const Slider = ()=>{

    const [image, setImage] = useState([
        '../../../public/imagens/home.png',
        '../../../public/imagens/2.jpg',
        '../../../public/imagens/3.jpg',
        '../../../public/imagens/4.jpg'
    ]);

    const [imageActual, setImageActual] = useState(0);

    console.log(image[imageActual])

    return (
        <C.Slider imageSlider={image[imageActual]}>
            {/* <C.Row onClick={()=>{setImageActual(prev => (prev-1) >= 0 ? prev-1 : image.length-1)}}><FaArrowAltCircleLeft/><p>Atrás</p></C.Row> */}
            <C.Img key={image[imageActual]} src={image[imageActual]}/>
            {/* <C.Row onClick={()=>{setImageActual(prev => (prev+1) < image.length ? prev+1 : 0)}}><p>Avançar</p><FaArrowAltCircleRight/></C.Row> */}
            
        </C.Slider>
    )
}