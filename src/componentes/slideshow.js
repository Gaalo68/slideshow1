import React, { useRef, useEffect } from "react";
//useref nos pemrite acceder a las referencias que reempalzan el id
//para que el codigo sea reutilizable
import img1 from './../img/1.jpeg';
import img2 from './../img/2.jpeg';
import img3 from './../img/3.jpeg';
import img4 from './../img/4.jpeg';

import { ReactComponent as FlechaDerecha } from "./../img/FlechaIzquierda.svg";
import { ReactComponent as FlechaIzquierda } from "./../img/FlechaDerecha.svg";
import styled from "styled-components";


//definimos funcion para slideShow que va a ser igual a una ref nueva
//que por defecto tendra un valor nulo para que reciba datos desde cualquier
//lado donde la traslademos
//para acceder a slideshow debemos tener en cuenta mla propiedad current
//de deberia quedas asi: slideshw.current
//definimos una funcion para pasar a la siguiente imagen

const Slideshow = () => {
  const slideshow = useRef(null);
  const intervaloSlideshow = useRef(null);

  const siguiente = () => {
    //comprobamos que el slideshow tenga elementos//
    if (slideshow.current.children.length > 0) {
      console.log("siguiente");
      //obtenemnos el primer elemento del slideshow
      const primerElemento = slideshow.current.children[0];

      slideshow.current.style.transition = `2000ms ease-out all`;

      const tamañoSlide = slideshow.current.children[0].offsetWidth;

      //vamos a mover el slideshow
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      //esta funcion se ejecuta cuando la transicion de mover el slideshow acabe
      const transicion = () => {
        //reiniciamos la posicion del slideshow
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = `translateX(0)`;

        //tomamos el primer elemento y lo enviamos al final
        //esto lo hace appendChild
        slideshow.current.appendChild(primerElemento);
      };

      //eventListener para cuando termina la animacion
      slideshow.current.addEventListener('transitionend', transicion);
    }
  };

  const anterior = () => {
    console.log("Anterior");
    if (slideshow.current.children.length > 0) {
      //obtenemos el ultimo elemento del slideshow
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      );

      slideshow.current.style.transition = "none";

      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        slideshow.current.transition = "300ms ease-out all";
        slideshow.current.style.transform = `translateX(0)`;
      }, 500);
    }
  };
  //funcionm para darle intervalo a las imagenes y que pasen sin dar click
  useEffect(() => {
    intervaloSlideshow.current = setInterval(() => {
      siguiente();
    }, 30);
    //eliminamos los intervalos para cuando demos click
    slideshow.current.addEventListener("mouseenter", () => {
      //creamos una funcion para limpiar el intervalo
      clearInterval("intervaloSlideshow.current");
    });

    //volvemos a iniciar el intervalo cuando saque el cursor del slideshow
    slideshow.current.addEventListener("mouseleave", () => {
      intervaloSlideshow.current = setInterval(() => {
        siguiente();
      }, 30);
    });
  }, []);

  return (
    <ContenedorPrincipal>
      <ContenedorSlideshow ref={slideshow}>
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
      </ContenedorSlideshow>
      <Controles>
        <Boton onClick={anterior}>
          <FlechaIzquierda />
        </Boton>
        <Boton derecho onClick={siguiente}>
          <FlechaDerecha />
        </Boton>
      </Controles>
    </ContenedorPrincipal>
  );
};

const ContenedorPrincipal = styled.div`
  position: relative;
`;

const ContenedorSlideshow = styled.div`
  display: flex; /*para q cada imagen queda al lado de otra*/
  flex-wrap: nowrap; /*para asegurarnos de quede una al lado de otra*/
`;

const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transitio: 0.3s ease all;
  z-index: 10;
  max-height: 500px; /*para que todas las imagenes quedden del mismo tamaño*/
  position: relative;

  img {
    width: 100%;
    vetical-align: top;
  }
`;

const TextoSlide = styled.div`
  background: ${(props) =>
    props.colorFondo ? props.colorFondo : "rgba(0,0,0,.3)"};
  color: ${(props) => (props.colorTexto ? props.colorTexto : "#fff")};
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
  height: 100%;
  text-align: center;
  position: absolute;
  transition: 0.3s ease all;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    path {
      fill: #fff;
    }
  }

  path {
    filter: ${(props) =>
      props.derecho
        ? "drop-shadow(-2px 0px 0 px #fff)"
        : "drop-shadow(2px 0px 0 px #fff)"};
  }

  ${(props) => (props.derecho ? "right: 0" : "left: 0")}
`;

export default Slideshow;

//se crea el componente Slideshow y luego se importa a la app.js
