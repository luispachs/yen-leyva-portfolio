import {Link, useNavigate} from "react-router-dom";
import image from "../assets/Images/layered-waves-haikei.svg"
import logo from "../assets/Images/ImageLogo_con_texto.png"



function Layout(props){
    let navigate=useNavigate()
    
    return (
        <div className="container-fluid">
            <header className="col-12" onClick={()=>{navigate("/")}}>
                <div className="col-12 row">
                    <div className="col-12" id="main-title">
                        <h1 className="col-3"> Yen leyva</h1>
                        <h2 className="subtitle col-9">Nails art</h2>
                        <img src={image} alt="waves" className="bannerImage"/>
                    </div>
                </div>
            </header>
            <div>
                        <nav>
                            <div className="navItem home" id="home"><Link to="/">Home</Link></div>
                            <div className="navItem aboutme" id="aboutme"><Link to="/aboutme">About Me</Link></div>
                            <div className="navItem myworks" id="myworks"><Link to="/myworks"> My works</Link></div>
                        </nav>
            </div>
           
            <main className="col-12">
                {props.children }
            </main>


            <footer className="col-12">
                <div className="col-12 row">
                    
                    <div className="col-10 actions pie">
                    <div className="col-2 logo"><img src={logo} alt="Logo" height={200} width={200} /></div>
                    <small> <h2>Yen leyva -  Nails art</h2>
                        <p><em>Pasi&oacute;n por el arte y las uñas</em></p>
                        <p>
                            <small>Colombia - 2022</small>
                        </p>
                        <p className="small">Desarrollado por <a href="https://www.linkedin.com/in/luis-pacheco-6697a01a6/" target="_blank">Luis Pacheco .S</a></p>
                    </small>
                    </div>

                 

                </div>
                
            </footer>
        </div>
    )
}

export default Layout