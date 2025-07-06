import Tarea from "./Tarea";

const Columna = (props) => {
    const { tareas, encabezado, estilo } = props;

    return (
        <>
            <div className="card col col-3 p-0  mx-1">
                <div className={estilo}>
                    <p className="text-white text-center"> Tareas {encabezado} </p>
                </div>
                <div className="card-body">
                    {
                        tareas.map((tarea, index) => (
                            <div key={index} className=''>
                                <Tarea nombre={tarea.nombre} dificultad={tarea.dificultad} avance={tarea.avance}
                                idProyecto={tarea.idProyecto} nombreProyecto={tarea.nombreProyecto}
                                dificultadProyecto={tarea.dificultadProyecto} />
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    );
}
export default Columna;