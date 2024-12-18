import "./customize.css";
export default function Information(){

    return (
        <section className="bigbox p-4">
            
            <div className="boxes d-flex justify-content-center">

                <div id="boximg" className="img-thumbnail">
                        <img src="https://i.pinimg.com/564x/19/7b/73/197b736d724ac3f1b4cdcddd0740d1e1.jpg" className="slide img-fluid"/>
                    </div>                

                <div className="p-5" id="learnmore">
                    <h3>
                       Our Difference
                    </h3>
                    <p>
                    El creador de la página ha colocado ahí ese aparente texto incomprensible a propósito. Los diseños de página se ven mejor con algo en cada sección.
                    </p>
                    <div>
                        <ul>
                            <i class="bi bi-check"> cualidad </i> 
                        </ul>
                        <ul>
                            <i class="bi bi-check"> cualidad </i> 
                        </ul>
                        <ul>
                            <i class="bi bi-check"> cualidad </i> 
                        </ul>
                    </div>
                    <button className="button-learnmore"> learn more </button>
                    
                </div>  

            </div>

            
            <div className="boxes gap-1 d-flex justify-content-center flex-column" id="second-box">

                <div>
                    <img>
                    </img>
                </div>
                
                <div className="" type="text" id="textbox">
                    <h3>
                        Snacks that Taste as Good as they Make You Feel
                    </h3>
                    <p>
                    Cuando entras en una página web de muestra o abres una plantilla de correo electrónico y ves un contenido que empieza por "lorem ipsum," el creador de la página ha colocado ahí ese aparente texto incomprensible a propósito. Los diseños de página se ven mejor con algo en cada sección. El texto Lorem Ipsum divertido puede aparecer en cualquier tamaño y fuente para simular todo lo que crees para tus campañas.                      
                    </p>
                </div>
                     

                <div class="prod p-4 rounded container-fluid">
        
                    <div class="cajaAlergenos row container text-center">
            
                        <div class="col tarjetaIcono">
                            <i class="icono bi bi-cup-hot-fill"></i>
                            <p> Prow scuttle parrel provost Sail</p>
                        </div>
    
                        <div class="col tarjetaIcono">
                            <i class="icono bi bi-recycle"></i>
                            <p> Prow scuttle parrel provost Sail</p>
                        </div>
    
                        <div class="col tarjetaIcono">
                            <i class="icono bi bi-stars"></i>
                            <p> Prow scuttle parrel provost Sail</p>
                        </div>
                        
                        <div class="col tarjetaIcono">
                            <i class="icono bi bi-wifi"></i>
                            <p> Prow scuttle parrel provost Sail</p>
                        </div>
                        
                    </div>

                </div>
            </div>  

        </section>
        
    )
}