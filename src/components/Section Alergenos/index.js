import "./sectalergen.css"
import {Link} from 'react-router-dom';
export default function SectionAlergenos(){

    return (

    <div class="prod rounded container-fluid text-center">

        <div class="cajaDialogo">
            <h3> sobre nuestros productos </h3>
        </div>
        
        <div class="cajaAlergenos row container text-center">
            
            <div class="col tarjetaIcono">
                <p> sin lactosa</p>
                <div class="row circulo rounded-circle">
                    <img class="icono" width="90" height="90" src="https://img.icons8.com/ios-glyphs/90/no-milk.png" alt="no-milk"/>
                </div>
            </div>
    
            <div class="col tarjetaIcono" >
                <p> sin gluten</p>
                <div class="row circulo rounded-circle">
                    <img  class="icono"  width="90" height="90" src="https://img.icons8.com/ios-glyphs/90/no-gluten.png" alt="no-gluten"/>
                </div>
                
            </div>
    
            <div class="col tarjetaIcono">
                <p> cruelty free </p>
                <div class="row circulo rounded-circle">
                    <img class="icono" width="90" height="90" src="https://img.icons8.com/ios-glyphs/90/vegan-symbol.png" alt="vegan-symbol"/>
                </div>
                
            </div>
        </div>

    </div>

    )
}