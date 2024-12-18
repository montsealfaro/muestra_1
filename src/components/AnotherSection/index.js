import "./customize.css";
import imagenes from '../../assets/imagenes'
export default function AnotherSection(){

    return (

    <div>
        <section className="more d-flex p-4 justify-content-center container-fluid">

            <div className="targett p-3">
                <div className="iconbox rounded">
                    <img src={imagenes.arco} className="img-fluid"></img>
                </div>
                <h3 class="p-3"> Join the Fam</h3>
                <p> Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog</p>
                <div className="d-flex p-4 gap-3">
                    <button class="btn btn-primary " id="button-as">
                        instagram
                    </button>
                    <button class="btn btn-primary" id="button-as">
                        tiktok
                    </button>
                </div>

            </div>

            <div className="imgbox gap-3 justify-content-center ">
                <div className="box">
                    <img src={imagenes.bolsa} className="img img-fluid"></img>
                </div>
                <div className="box">
                    <img src={imagenes.cafe01} className="img img-fluid"></img>
                </div>
                <div className="box">
                    <img src={imagenes.wafflee} className="img img-fluid"></img>
                </div>
                <div className="box">
                    <img src={imagenes.kitty} className="img img-fluid"></img>
                </div>
            </div>
            
        </section>
        
    </div>
        
    )
}