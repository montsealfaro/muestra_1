import "./home.css"
import Nav from "../../components/Nav"
import Header from "../../components/Header"
import InterNav from "../../components/Separador"
import Tarjetero from "../../components/CardsSection"
import Information from "../../components/InfoSection"
import { Carousel } from "../../components/Carousel"
import AnotherSection from "../../components/AnotherSection"
import Footer from "../../components/Footer"
import { Collage } from "../../components/Section"
export default function Home(){

    return (

        <div>
            <InterNav></InterNav>
            <Nav/>
            <Header></Header>
            <Tarjetero/>
            <Collage></Collage>
            <Information></Information>
            <AnotherSection></AnotherSection>
            <Footer></Footer>

        </div>

    )
}