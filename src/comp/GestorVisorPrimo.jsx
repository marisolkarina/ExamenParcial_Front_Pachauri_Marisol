import VisorPrimo from "./VisorPrimo";

const GestorVisorPrimo = (props) => {

    const {soloManual} = props;

    return(
        <section>
            <p className="fs-3 text-center mt-3">Pregunta 2: Caso Números Primos</p>
            <article className="container">
                <VisorPrimo soloManual={soloManual}/>
            </article>
        </section>
    );

}
export default GestorVisorPrimo;