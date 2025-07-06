import { useEffect, useState } from "react";
import axios from 'axios';

const api = "http://localhost:5000/alumnos";

const GestorAlumnos = () => {
    const [alumnos, setAlumnos] = useState([]);
    const [modoEdicion, setModoEdicion] = useState(false);
    const [form, setForm] = useState({
        nombres: '',
        dni: '',
        celular: '',
        estado: 1,
        id: null
    });
    // estado:
    // 0 = eliminado
    // 1 = activo
    // 2 = retirado
    // 3 = suspendido

    useEffect(() => {
        obtenerAlumnos();
    }, []);

    const obtenerAlumnos = async () => {
        try {
            const res = await axios.get(api);
            setAlumnos(res.data);
        } catch (err) {
            console.error(`Error al obtener los alumnos ${err}`);
        }
    };

    const registrarAlumno = async () => {
        try {
            await axios.post(api, {
                nombres: form.nombres,
                dni: form.dni,
                celular: form.celular,
                estado: 1
            });

            obtenerAlumnos();
            limpiaFormulario();
        } catch (err) {
            console.error(`Error al registrar el alumno ${err}`);
        }
    }

    const limpiaFormulario = () => {
        setForm(
            {
                nombres: '',
                dni: '',
                celular: '',
                estado: 1,
                id: null
            }
        )
        setModoEdicion(false);
    }

    const actualizarAlumno = async () => {
        try {
            await axios.put(`${api}/${form.id}`, {
                nombres: form.nombres,
                dni: form.dni,
                celular: form.celular,
                estado: form.estado
            });
            obtenerAlumnos();
            limpiaFormulario();
        } catch (err) {
            console.error(`Error al obtener los alumnos ${err}`);
        }
    }

    const editarAlumno = (alumno) => {
        setForm(alumno);
        setModoEdicion(true);
    }

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setForm(
            { ...form, [name]: name === "estado" ? parseInt(value) : value }
        )
    }

    const eliminarAlumno = async (alumno) => {
        try {
            let confirma = window.confirm(`Desea eliminar al alumno ${alumno.nombres}?`);
            if (confirma) {
                await axios.put(`${api}/${alumno.id}`, {
                    nombres: alumno.nombres,
                    dni: alumno.dni,
                    celular: alumno.celular,
                    estado: 0
                });
                obtenerAlumnos();
            }
        } catch (err) {
            console.error(`Error al eliminar el alumno ${err}`);
        }
    }

    const restaurar = async (alumno) => {
        try {
            let confirma = window.confirm(`Desea restaurar el alumno ${alumno.nombres}?`);
            if (confirma) {
                await axios.patch(`${api}/${alumno.id}`, {
                    estado: 1
                });
                obtenerAlumnos();
            }
        } catch (err) {
            console.error(`Error al restaurar el alumno ${err}`);
        }
    }

    const alumnosEliminados = alumnos.filter((al) => al.estado === 0);

    return (
        <main className="container mt-3">
            <p className="fs-3 text-center mt-3">Pregunta 4: Caso Gestión Alumnos</p>
            <div className="row">
                <div className="col-md-4">
                    <p className="lead fs-2 text-primary">{modoEdicion ? 'Editar Alumno' : 'Registrar Alumno'}</p>
                    <form className="border border-1 shadow p-3 rounded"
                        onSubmit={
                            (e) => {
                                e.preventDefault();
                                modoEdicion ? actualizarAlumno() : registrarAlumno();
                            }
                        }>
                        <input type="text" name="nombres" required value={form.nombres} onChange={manejarCambio}
                            placeholder="nombres" className="form-control my-2" />
                        <input type="text" name="dni" required value={form.dni} onChange={manejarCambio}
                            placeholder="dni" className="form-control my-2" />
                        <input type="text" name="celular" required value={form.celular} onChange={manejarCambio}
                            placeholder="celular" className="form-control my-2" />
                        {
                            modoEdicion ? (
                                <select name="estado" value={form.estado} onChange={manejarCambio} className="form-control my-2">
                                    <option value="1">Activo</option>
                                    <option value="2">Retirado</option>
                                    <option value="3">Suspendido</option>
                                </select>
                            ) : (<></>)
                        }

                        <div className="d-flex justify-content-between mt-3">
                            <input type="submit" className="btn btn-success" value={modoEdicion ? 'Actualizar' : 'Registrar'} />
                            {
                                (modoEdicion && (
                                    <input type="button" className="btn btn-danger"
                                        onClick={limpiaFormulario} value="Cancelar"/>
                                ))
                            }
                        </div>

                    </form>
                </div>

                <div className="col-md-8">
                    <div className="row">
                        {
                            alumnos.map((a) => (
                                <div className="col-md-4 mb-3" key={a.id}>
                                    <div className="card shadow">
                                        <div className="card-header bg-primary text-white">
                                            <p className="fw-medium">{a.nombres}</p>
                                        </div>
                                        <div className="card-body">
                                            <p><strong>ID:</strong> {a.id}</p>
                                            <p><strong>DNI:</strong> {a.dni}</p>
                                            <p><strong>Celular:</strong> {a.celular}</p>
                                            <p><strong>Estado:</strong> {
                                                a.estado === 0 ? 'Eliminado' :
                                                    a.estado === 1 ? 'Activo' :
                                                        a.estado === 2 ? 'Retirado' : 'Suspendido'
                                            }</p>
                                        </div>
                                        {
                                            a.estado !== 0 ? ( // solo si es activo se puede editar/eliminar
                                                <div className="card-footer d-flex justify-content-between">
                                                    <button className="btn btn-warning" onClick={() => editarAlumno(a)}>Editar</button>
                                                    <button className="btn btn-danger" onClick={() => eliminarAlumno(a)}>Eliminar</button>
                                                </div>
                                            ) : (<></>)

                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                {
                    alumnosEliminados.length > 0 ? (
                        <>
                            <p className="fs-3 text-center text-danger">Alumnos eliminados</p>
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered table-hover text-center mx-auto" style={{ width: '90%' }}>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Nombres</th>
                                            <th>DNI</th>
                                            <th>Celular</th>
                                            <th>Estado</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            alumnosEliminados.map((a) => (
                                                <tr key={a.id}>
                                                    <td>{a.id}</td>
                                                    <td>{a.nombres}</td>
                                                    <td>{a.dni}</td>
                                                    <td>{a.celular}</td>
                                                    <td>
                                                        {a.estado} : Eliminado
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-success mx-2"
                                                            onClick={() => restaurar(a)}>Restaurar</button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </>
                    ) : (
                        <p className="fs-3 text-center text-danger">No hay alumnos eliminados</p>
                    )
                }

            </div>
        </main>
    );
};
export default GestorAlumnos;
