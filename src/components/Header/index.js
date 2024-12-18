import "./header.css";
import imagenes from '../../assets/imagenes'
import Matcha from "../Animaciones/matcha";
import { Another } from "../Carousel/another";
export default function Header(){

    return (
        <section className="cc container-fluid d-flex justify-content-center">
            <div className="header-contain d-flex container-fluid img-fluid">
                <div className="textbox container-fluid img-fluid">
                    <img src={imagenes.flor01} className="icon col img-fluid"/>
                    <h3 className="hypertext">
                        DESCUBRE NUEVAS VARIEDADES DE CAFÉ 
                    </h3>
                    <p className="subtext"> para saber mas de nuestros productos puedes hacer click aqui hola hola para saber mas de nuestros productos puedes hacer click aqui hola hola </p>
                    <button id="button-h"> SHOP ALL PRODUCTS </button>
                </div>
                
                <div className="cont-head d-flex justify-content-center container-fluid">
                    <Another></Another>
                </div>

            </div>
                
        </section>
        
    )
}