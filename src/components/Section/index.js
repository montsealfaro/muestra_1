import "./customcoll.css"
import imagenes from '../../assets/imagenes'
import { Carousel } from "../Carousel"

export const Collage = () => {

    return(
<div class="bigcont">
        <div className="collage">
                <div className="collagebox gap-3 justify-content-center ">
                <div className="box">
                    <img src={imagenes.fridge} className="img img-fluid"></img>
                </div>
                <div className="box">
                    <Carousel/>
                </div>
                <div className="box">
                    <h1 class="text-break"> discover </h1>
                </div>
                <div className="box">
                    <img src={imagenes.cafetera02} className="img img-fluid"></img>
                </div>
                <div className="box">
                    <h3 class="text-break">Enjoy</h3>
                    <h4 class="text-break">new </h4>
                    <h6 class="text-break">things</h6>
                </div>
                <div className="box">
                    <img src={imagenes.tostada} className="img img-fluid"></img>
                </div>
                <div className="box">
                    <img src={imagenes.mix} className="img img-fluid"></img>
                </div>
                <div className="box">
                    <img src={imagenes.menu} className="img img-fluid"></img>
                </div>
                <div className="box">
                    <h3 class="text-break"> explore a world full of taste</h3>
                </div>
                <div className="box">
                    <img src={imagenes.takeaway} className="img img-fluid"></img>
                </div>
                </div>


        </div>
</div>
        

    )}