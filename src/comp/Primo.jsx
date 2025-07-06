import { Component } from "react";

class Primo extends Component {

    render() {

        const {soloManual, siguientePrimo, anteriorPrimo, numeroPrimo} = this.props;

        return (
            <main className="card my-2 mx-auto col-4">
                <div className="card-header">
                    <p className="lead text-primary text-center fw-medium">Número primo: {numeroPrimo}</p>
                </div>
                {
                    soloManual ? (
                        <div className="card-body d-flex justify-content-center">
                            <button className="btn btn-success mb-3 mx-2" onClick={()=>anteriorPrimo()}>Anterior</button>
                            <button className="btn btn-primary mb-3 mx-2" onClick={()=>siguientePrimo()}>Siguiente</button>
                        </div>
                    ) : (
                        <></>
                    )
                }
            </main>
        );
    }
}
export default Primo;