import { data } from "../data";
import Columna from "./Columna";

const VisorTableroKanban = (props) => {
    const { proyectos } = props;
    const { columnasTablero } = data;

    const tareasTotales = [];

    proyectos.forEach((proyecto) => {
        proyecto.tareas.forEach((tarea) => {
            tareasTotales.push({
                ...tarea,
                idProyecto: proyecto.id,
                nombreProyecto: proyecto.nombre,
                dificultadProyecto: proyecto.dificultad
            });
        });
    });

    return (
        <div className="">
            {

                <div className=" my-2 mt-3 row p-0 d-flex justify-content-center">
                    {
                        columnasTablero.map((col, index) => {
                            let tareasFiltradas =
                                col.avance === 1 ? tareasTotales.filter(t => t.avance !== 0 && t.avance !== 100) :
                                    tareasTotales.filter(t => t.avance === col.avance);
                            return (
                                <Columna key={index} tareas={tareasFiltradas} encabezado={col.encabezado} estilo={col.estilo} />
                            );
                        })
                    }
                </div>
            }
        </div>
    );
}
export default VisorTableroKanban;