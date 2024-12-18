import "./internav.css"
import imagenes from '../../assets/imagenes'
export default function InterNav(){

        return (
        
        <marquee className="inter container-fluid">
                <div className=" intertext-box d-flex">
                    <p className="text-center" id="txt1">
                    hola esta es una sección piolarda
                    </p>
                    <p className="text-center" id="txt1">
                    hola esta es una sección piolarda
                    </p>
                    <img src={imagenes.cafe03} className="icon-in col img-fluid"/>
                    <p className="text-center" id="txt1">
                    hola esta es una sección piolarda
                    </p>
                    <p className="text-center" id="txt1">
                    hola esta es una sección piolarda
                    </p>
                    <p className="text-center" id="txt1">
                    hola esta es una sección piolarda
                    </p>
                    <p className="text-center" id="txt1">
                    hola esta es una sección piolarda
                    </p>
                    <img src={imagenes.cafe03} className="icon-in col img-fluid"/>
                    <p className="text-center" id="txt1">
                    hola esta es una sección piolarda
                    </p>
                    <p className="text-center" id="txt1">
                    hola esta es una sección piolarda
                    </p>
                </div>
                
            
    
        </marquee>
        

    )
}