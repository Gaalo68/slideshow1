import React from "react";
import Slideshow from "./componentes/slideshow";
//importamos Slideshow y los estilos.css
import './estilos.css';
import styled from 'styled-components';


const App = ( ) => {
  return (
    <main>
      <Titulo>Productos destacados</Titulo>
      <Slideshow />
    </main>
  );
}

const Titulo = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

export default App;
