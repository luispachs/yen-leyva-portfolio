import Layout from "./Layout";
import {useNavigate} from "react-router-dom";



function Home(){

    let navigate= useNavigate()

    
    return (
        <Layout>
           <div className="container">
            <div className="col-3 actions cristal" onClick={(e)=>{navigate("/aboutme")}} >
                <div> <h3>¿Quien soy?</h3></div>
                <div className="col-12 texto">
                    <p>Te invito a conocer  mi historia en el nails art en este espacio</p>
                </div>
            </div>
            <div className="col-3 actions cristal" onClick={(e)=>{navigate("/myworks")}}>
                <div><h3>Conoce mi trabajo</h3></div>
                <div className="col-12 texto">
                    <p>Si quieres observar mi trabajo, puedes visitar este espacio</p>
                </div>
            </div>
            <div className="col-3 actions cristal" onClick={(e)=>{window.location.href="https://wa.me/573193822282"}}>
                <div><h3>¿Quieres contactarme?</h3></div>
                <div className="col-12 texto">
                    <p>Si deseas saber como contactarme y conocer mis redes sociales te invito a ingresar aqui</p>
                </div>
            </div>
           </div>
        </Layout>
    )
}

export default Home