import React from "react";
import {Slideshow, Slide, TextoSlide} from "./componentes/slideshow";
//importamos Slideshow y los estilos.css
import './estilos.css';
import styled from 'styled-components';
import img1 from './img/1.jpeg';
import img2 from './img/2.jpeg';
import img3 from './img/3.jpeg';
import img4 from './img/4.jpeg';

//este slideshow ya es reutilizable y se puede dupliar con lo cual
//obtendremos un slideshow independiente y totalmente diferente
const App = ( ) => {
  return (
    <main>
      <Titulo>Productos destacados</Titulo>
      <Slideshow controles={true}>
        <Slide>
          <a href="https://github.com/Gaalo68">
            <img src={img1} alt="" />
          </a>
          <TextoSlide>
            <p>15% de descuento</p>
          </TextoSlide>
          </Slide>
          <Slide>
            <a href="https://github.com/Gaalo68">
              <img src={img2} alt="" />
            </a>
            <TextoSlide>
              <p>15% de descuento</p>
            </TextoSlide>
          </Slide>
          <Slide>
            <a href="https://github.com/Gaalo68">
              <img src={img3} alt="" />
            </a>
            <TextoSlide>
              <p>15% de descuento</p>
            </TextoSlide>
          </Slide>
          <Slide>
            <a href="https://github.com/Gaalo68">
              <img src={img4} alt="" />
            </a>
            <TextoSlide>
              <p>15% de descuento</p>
            </TextoSlide>
          </Slide>
      </Slideshow>
           
     
      <Titulo1>Productos en Oferta</Titulo1>
      <Slideshow controles={true} autoplay={true} velocidad="500" intervalo="500">
        <Slide>
          <a href="https://github.com/Gaalo68">
            <img src={img1} alt="" />
          </a>
          <TextoSlide colorFondo="navy">
            <p>15% de descuento</p>
          </TextoSlide>
          </Slide>
          <Slide>
            <a href="https://github.com/Gaalo68">
              <img src={img2} alt="" />
            </a>
            <TextoSlide colorFondo="navy">
              <p>15% de descuento</p>
            </TextoSlide>
          </Slide>
          <Slide>
            <a href="https://github.com/Gaalo68">
              <img src={img3} alt="" />
            </a>
            <TextoSlide colorFondo="navy">
              <p>15% de descuento</p>
            </TextoSlide>
          </Slide>
          <Slide>
            <a href="https://github.com/Gaalo68">
              <img src={img4} alt="" />
            </a>
            <TextoSlide colorFondo="navy">
              <p>15% de descuento</p>
            </TextoSlide>
          </Slide>
      </Slideshow>
    </main>
  );
}

const Titulo = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 30px;
  text-align: center;
`;

const Titulo1 = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-top: 60px;
  text-align: center;
`;

export default App;
