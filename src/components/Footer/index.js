import "./footer.css";
export default function Footer(){

    return (

    <div>
        <footer className="footbox p-3">
            <div className="p-5">
                <h2 className="p-2">
                    Sign up to our newsletter
                </h2>
                <div class="wrapped">
                    <div className="search-input">
                        <input type="text" placeholder="Email"/>
                        <button className="button-subs">subscribe</button>
                    </div>
                </div>
                <p className="p-3">
                    lorem
                </p>
            </div>

            <div className="grid p-5" id="side-foot">
                <p> Locales </p>
                <p> Contacto </p>
                <p> Termns of Service </p>
                <p> Privacy Policy </p>
                <p> Redes </p>
                <div className="icon-apps">
                <i class="bi bi-instagram"></i>
                <i class="bi bi-tiktok"></i>
                <i class="bi bi-pinterest"></i>
                <i class="bi bi-facebook"></i>
                </div>
            </div>
        </footer>

        
        
    </div>
        
    )
}