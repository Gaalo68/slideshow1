import React from "react";
import img1 from './../img/1.jpeg';
//import img2 from './../img/2.jpeg';
//import img3 from './../img/3.jpeg';
//import img4 from './../img/4.jpeg';
import {ReactComponent as FlechaIzquierda} from './../img/FlechaIzquierda.svg';
import {ReactComponent as FlechaDerecha} from './../img/FlechaDerecha.svg';

const Slideshow = () => {
    return (
        <div>
            <div>
                <a href="https://github.com/Gaalo68">
                    <img src={img1} alt=""/>
                    
                </a>
                <div>
                    <p>15% de descueto</p>
                </div>
            </div>
            <div>
                <button>
                    <FlechaIzquierda/>
                </button>
                <button>
                    <FlechaDerecha/>
                </button>
            </div>
        </div>
    );
}

export default Slideshow;

//se crea el componente Slideshow y luego se importa ala app.js