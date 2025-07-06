const Tarea = (props) => {
    const { nombre, dificultad, avance, idProyecto, nombreProyecto, dificultadProyecto } = props;

    return (
        <div className="">
            <div className={avance===0 ? 'alert alert-danger' : avance===100 ? 'alert alert-success' : 'alert alert-primary'}>
                <p>Id Proyecto: {idProyecto}</p>
                <p>Proyecto: {nombreProyecto}</p>
                <p>Dificultad del proyecto: {dificultadProyecto}</p>
                <p>Tarea: {nombre}</p>
                <p>Dificultad de la tarea: {dificultad}</p>
                <p>Avance de la tarea: {avance} %</p>
            </div>
        </div>

    );
}
export default Tarea;