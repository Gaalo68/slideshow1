import React from "react";
import img1 from './../img/1.jpeg';
import img2 from './../img/2.jpeg';
import img3 from './../img/3.jpeg';
import img4 from './../img/4.jpeg';
import {ReactComponent as FlechaDerecha} from './../img/FlechaIzquierda.svg';
import {ReactComponent as FlechaIzquierda} from './../img/FlechaDerecha.svg';
import styled from "styled-components";

const Slideshow = () => {
    return (
        <contenedorPincipal>
        <ContenedorSlideshow>
            <Slide>
                <a href="https://github.com/Gaalo68">
                    <img src={img1} alt=""/>
                    
                </a>
                <TextoSlide>
                    <p>15% de descueto</p>
                </TextoSlide>
            </Slide>
            <Slide>
                <a href="https://github.com/Gaalo68">
                    <img src={img2} alt=""/>
                    
                </a>
                <TextoSlide>
                    <p>15% de descueto</p>
                </TextoSlide>
            </Slide>
            <Slide>
                <a href="https://github.com/Gaalo68">
                    <img src={img3} alt=""/>
                    
                </a>
                <TextoSlide>
                    <p>15% de descuento</p>
                </TextoSlide>
            </Slide>
            <Slide>
                <a href="https://github.com/Gaalo68">
                    <img src={img4} alt=""/>
                    
                </a>
                <TextoSlide>
                    <p>15% de descueto</p>
                </TextoSlide>
            </Slide>
            </ContenedorSlideshow>
            <Controles>
            <Boton derecho>
                    <FlechaDerecha/>
                </Boton>
                <Boton>
                    <FlechaIzquierda/>
                </Boton>
            </Controles>
        </contenedorPincipal>
    );
}

const contenedorPincipal = styled.div`
    position: relative;

`;

const ContenedorSlideshow = styled.div`
    display: flex; /*para q cada imagen queda al lado de otra*/
    flex-wrap: nowrap;/*para asegurarnos de quede una al lado de otra*/
`;

const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transitio: .3s ease all;
    z-index: 10;
    max-height: 500px;/*para que todas las imagenes quedden del mismo tamaño*/
    position: relative;

    img {
        width: 100%;
        vetical-align: top;
    }
`;

const TextoSlide = styled.div`
    background: rgba(0,0,0, .5);
    color: #fff;
    width: 100%;
    padding: 10px 30px;
    position: absolute;
    bottom: 0;
    text-align: center;

    @media screen and (max-width: 700px) {
        position: relative;
        background: #000;
    }
`;

const Controles = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    pointer-event: none;
`;

const Boton = styled.button`
    pointer-event: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 5%;
    height: 60%;
    text-align: center;
    position: absolute;
    transition: .3s ease all;
    &:hover {
        background: rgba(0,0,0,.2);
        path {
            fill: #fff;
        }
    }

    path {
        filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0 px #fff)' : 'drop-shadow(2px 0px 0 px #fff)'}
    }

    ${props => props.derecho ? 'right: 0' : 'left: 0'}
`;

export default Slideshow;

//se crea el componente Slideshow y luego se importa a la app.js