import "./cardsect.css"
import Card from "../Card"
export default function Tarjetero(){

    return (

        <div className="sectioncards grid text-center">
            <h3 className="p-3"> our products!</h3>
            <div className="d-flex gap-5 justify-content-center">
            <Card/>
            <Card/>
            <Card/>
            </div>
        </div>
        

    )
}