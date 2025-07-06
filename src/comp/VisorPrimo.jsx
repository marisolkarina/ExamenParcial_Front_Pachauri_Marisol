import { Component } from "react";
import Primo from "./Primo";

class VisorPrimo extends Component {

    state = {
        numeroPrimoM: 2, // manual
        numeroPrimoA: 2, // automatico
        auto: true // la doble funcionalidad (manual - auto) inicia en automatico(auto: true) y puede volverse manual (auto: false)
    }

    esPrimo = (numero) => {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i == 0) return false;
        }
        return true;
    }

    buscarPrimo = (numero, avanzaRetrocede) => {
        let num = numero + avanzaRetrocede;
        while (num > 1 && !this.esPrimo(num)) {
            num += avanzaRetrocede;
        }
        return num < 2 ? 2 : num;
    }

    siguientePrimo = () => {
        this.setState({
            numeroPrimoM: this.buscarPrimo(this.state.numeroPrimoM, 1)
        })
    }

    anteriorPrimo = () => {
        this.setState({
            numeroPrimoM: this.buscarPrimo(this.state.numeroPrimoM, -1)
        })
    }

    actualizarPrimo = () => {
        this.setState({
            numeroPrimoA: this.buscarPrimo(this.state.numeroPrimoA, 1)
        })
    }

    componentDidMount() {
         // solo cambia cada 2 seg cuando es automatico
            this.id = setInterval(() => {
                if (this.state.auto) this.actualizarPrimo()
            }, 2000);

    }

    componentWillUnmount() {
        clearInterval(this.id)
    }

    detenerAutomatico = () => {
        this.setState({
            auto: false, // paso de auto a manual
            numeroPrimoM: this.state.numeroPrimoA // si en automatico se encontraba en el numero primo 5 -> en manual debe continuar desde 5
        })
    };

    continuarAutomatico = () => {
        this.setState({
            auto: true, // paso de manual a auto
            numeroPrimoA: this.state.numeroPrimoM // si en manual se encontraba en el numero primo 5 -> en automatico debe continuar desde 5
        })
    };

    render() {
        const { soloManual } = this.props; // soloManual: solo es manual - pregunta 2.a

        return (
            <div>
                <Primo manual={soloManual || !this.state.auto}
                    numeroPrimo={soloManual ? (this.state.numeroPrimoM) : (!this.state.auto ? this.state.numeroPrimoM : this.state.numeroPrimoA)}
                    siguientePrimo={this.siguientePrimo} anteriorPrimo={this.anteriorPrimo} />
                {
                    !soloManual && ( // si no es solo manual o sea es el caso de las 2 funciones: manual y auto
                        <>
                            {
                                this.state.auto ? ( // Cuando hay las 2 fn de manual y auto: eligio automatico
                                    <div className="d-flex justify-content-center mt-2">
                                        <button className="btn btn-primary me-2" onClick={this.detenerAutomatico}>Parar</button>
                                    </div>
                                ) : ( // Cuando hay las 2 fn de manual y auto: eligio manual
                                    <div className="d-flex justify-content-center mt-2">
                                        <button className="btn btn-warning" onClick={this.continuarAutomatico}>Continuar Automático</button>
                                    </div>
                                )
                            }
                        </>
                    )
                }
            </div>
        );
    }
}
export default VisorPrimo;