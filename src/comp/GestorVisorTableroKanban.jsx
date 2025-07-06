import VisorTableroKanban from "./VisorTableroKanban";
import { data } from "../data";

const GestorVisorTableroKanban = () => {

    const {proyectos} = data;

    return(
        <section>
            <p className="fs-3 text-center mt-3">Pregunta 3: Caso Tablero Kanban</p>
            <article className="container">
                <VisorTableroKanban proyectos={proyectos}/>
            </article>
        </section>
    );

}
export default GestorVisorTableroKanban;