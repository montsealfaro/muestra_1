import "./nav.css"
import { Link } from "react-router-dom";
import InterNav from "../../components/Separador"
export default function Nav(){

    return (
        <div className="bar sticky-lg-top">
        
        <div className="barra">
            <div className="navv">
                <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a to="/" class="navbar-brand text" id="title" href="home">MySpace!</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a to="/"  class="nav-link active text" aria-current="page" href="home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a to='/products'  class="nav-link text" href="products">Products</a>
                            </li>
                            <li class="nav-item">
                                <a to="/contact"  class="nav-link text" href="contact">Contact</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                Dropdown link
                                </a>
                                <ul class="dropdown-menu text">
                                    <li><a to="/"  class="dropdown-item" href="#">Action</a></li>
                                    <li><a to="/"  class="dropdown-item" href="#">Another action</a></li>
                                    <li><a to="/"  class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
            

        </div>
        </div>
        

    )
}