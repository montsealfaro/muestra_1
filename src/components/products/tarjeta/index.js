import "./tarjeta.css"
import Tarjeta from "../marco"
export default function Tarjetas(){

    return (

        <div className="sectioncards grid text-center">
            <h3 className="p-3"> our products!</h3>
            <div className="d-flex gap-5 justify-content-center">
                <Tarjeta></Tarjeta>
                <Tarjeta></Tarjeta>
                <Tarjeta></Tarjeta>
            </div>
        </div>
        

    )
}