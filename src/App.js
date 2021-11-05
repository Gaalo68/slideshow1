import React from "react";
import Slideshow from "./componentes/slideshow";
//importamos Slideshow y los estilos.css
import './estilos.css';
import styled from 'styled-components';


const App = ( ) => {
  return (
    <mainn>
      <Titulo>Productos destacados</Titulo>
      <Slideshow />
    </mainn>
  );
}

const Titulo = styled.p`
  font-size: 20px;
  font_weight: 700;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

export default App;
