import { Component } from "react";
import Primo from "./Primo";

class VisorPrimo extends Component {

    state = {
        numeroPrimo: 2,
        numeroPrimoAuto: 2
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

    actualizarPrimo = () => {
        this.setState({
            numeroPrimoAuto: this.buscarPrimo(this.state.numeroPrimoAuto, 1)
        })
    }

    componentDidMount(){
        this.id = setInterval(() => {
            this.actualizarPrimo()
        }, 2000);
    }

    componentWillUnmount(){
        clearInterval(this.id)
    }

    render() {
        const {soloManual} = this.props;

        return(
            <>
                <Primo soloManual={soloManual} numeroPrimo={soloManual ? (this.state.numeroPrimo): (this.state.numeroPrimoAuto)}
                        siguientePrimo={this.siguientePrimo} anteriorPrimo={this.anteriorPrimo}/>
            </>
        );
    }
}
export default VisorPrimo;