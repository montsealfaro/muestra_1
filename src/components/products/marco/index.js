import "./marco.css"
export default function Tarjeta(){

    return (

        <div>
            <div className="card p-4 d-flex img-fluid container-fluid rounded">
                <h1> name</h1>
                <img className="imgcard img-fluid p-4" src="https://i.pinimg.com/736x/12/bb/7d/12bb7dc4e4f531e6273a6ac2bb66bccc.jpg"></img>
                <p className="p-3 text-break">something about the product c: </p>
                
                <button className="butt"> show me more </button>

            </div>

        </div>

    )
}