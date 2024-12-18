import "./prod.css"
import Nav from "../../components/Nav"
import InterNav from "../../components/Separador"
import Tarjetas from "../../components/products/tarjeta"
import { Collage } from "../../components/Section"
import Footer from "../../components/Footer"

export default function Products(){

    return (

        <div>
            <InterNav></InterNav>
            <Nav></Nav>
            <Tarjetas></Tarjetas>
            <Collage/>
            <Footer></Footer>

        </div>

    )
}