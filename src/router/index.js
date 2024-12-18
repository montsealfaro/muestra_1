
import {BrowserRouter as Router, Routes, Route} from "react-dom";

import Home from "../pages/Home/index.js"
import Products from "../pages/Products/index.js"
import Contact from "../pages/Contact/index.js"

export default function Ruteo (){

    return(
        <Router>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </Router>
    )
}