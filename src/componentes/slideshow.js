import React from "react";
import img1 from './../img/1.jpg';
import img2 from './../img/2.jpg';
import img3 from './../img/3.jpg';
import img4 from './../img/4.jpg';
import {reactComponent as flechaIzquierda} from './../img/flechaIzquierda.svg';
import {reactComponent as flechaDerecha} from './../img/flechaDerecha.svg';

const Slideshow = () => {
    return (
        <div>
            <div>
                <a href="https://github.com/Gaalo68">
                    <img src={img1} alt=""/>
                    <img src={img2} alt=""/>
                    <img src={img3} alt=""/>
                    <img src={img4} alt=""/>
                </a>
                <div>
                    <p>15% de descueto</p>
                </div>
            </div>
            <div>
                <button>
                    <flechaIzquierda/>
                </button>
                <button>
                    <flechaDerecha/>
                </button>
            </div>
        </div>
    );
}

export default Slideshow;

//se crea el componente Slideshow y luego se importa ala app.js