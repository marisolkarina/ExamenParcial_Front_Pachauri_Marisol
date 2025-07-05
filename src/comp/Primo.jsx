import { Component } from "react";

class Primo extends Component {

    state = {
        numeroPrimo: 2
    }

    esPrimo = (numero) => {
        for (let i=2; i<=Math.sqrt(numero); i++) {
            if (numero % i == 0) return false;
        }
        return true;
    }

    buscarPrimo = (numero, avanzaRetrocede) => {
        let num = numero + avanzaRetrocede;
        while(num>1 && !this.esPrimo(num)) {
            num += avanzaRetrocede;
        }
        return num < 2 ? 2 : num;
    }

    siguientePrimo = () => {
        this.setState({
            numeroPrimo: this.buscarPrimo(this.state.numeroPrimo, 1)
        })
    }

    anteriorPrimo = () => {
        this.setState({
            numeroPrimo: this.buscarPrimo(this.state.numeroPrimo, -1)
        })
    }

    render() {

        return (
            <main className="card my-2 mx-auto col-4">
                <div className="card-header">
                    <p className="lead text-primary text-center fw-medium">Número primo: {this.state.numeroPrimo}</p>
                </div>
                <div className="card-body d-flex justify-content-center">
                    <button className="btn btn-success mb-3 mx-2" onClick={this.anteriorPrimo}>Anterior</button>
                    <button className="btn btn-primary mb-3 mx-2" onClick={this.siguientePrimo}>Siguiente</button>
                </div>
            </main>
        );
    }
}
export default Primo;