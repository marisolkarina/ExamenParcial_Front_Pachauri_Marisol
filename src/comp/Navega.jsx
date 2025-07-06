import { NavLink, Route, Routes } from "react-router-dom";
import Inicio from "../Inicio";
import GestorVisorPrimo from "./GestorVisorPrimo";

const Navega = () => {

    return(
        <main className="container mb-3">
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="numero-primo-manual">Número Primo Manual</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="numero-primo-auto-manual">Número Primo Auto y Manual</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="numero-primo-manual" element={<GestorVisorPrimo soloManual={true}/>}></Route>
                <Route path="numero-primo-auto-manual" element={<GestorVisorPrimo soloManual={false}/>}></Route>
                <Route path="/" element={<Inicio/>}></Route>
            </Routes>
        </main>
    )
}

export default Navega;