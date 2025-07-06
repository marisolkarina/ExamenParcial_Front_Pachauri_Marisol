export const data = {
    proyectos: [
        {
            id: 1,
            nombre: "Mejora del servicio contable",
            dificultad: "Media",
            tareas: [
                { id: 1, nombre: "Revision de documentacion", dificultad: "baja", avance: 100 },
                { id: 2, nombre: "Revision nro 1 con stakeholders", dificultad: "baja", avance: 80 },
                { id: 3, nombre: "Analisis de libros contables", dificultad: "media", avance: 20 },
                { id: 4, nombre: "Implementacion del modulo estado financiero", dificultad: "alta", avance: 0 }
            ]
        },
        {
            id: 2,
            nombre: "Implementación de CRM",
            dificultad: "Alta",
            tareas: [
                { id: 1, nombre: "Definicion de requerimientos", dificultad: "media", avance: 100 },
                { id: 2, nombre: "Seleccion de proveedor", dificultad: "baja", avance: 60 },
                { id: 3, nombre: "Pruebas de integracion", dificultad: "alta", avance: 10 },
                { id: 4, nombre: "Capacitacion al personal", dificultad: "media", avance: 0 }
            ]
        },
        {
            id: 3,
            nombre: "Renovación de infraestructura TI",
            dificultad: "Alta",
            tareas: [
                { id: 1, nombre: "Evaluacion de servidores", dificultad: "media", avance: 25 },
                { id: 2, nombre: "Compra de equipos", dificultad: "baja", avance: 10 },
                { id: 3, nombre: "Migracion de datos", dificultad: "alta", avance: 10 },
                { id: 4, nombre: "Pruebas de rendimiento", dificultad: "alta", avance: 0 }
            ]
        },
        {
            id: 4,
            nombre: "Digitalizacion de archivos",
            dificultad: "Baja",
            tareas: [
                { id: 1, nombre: "Inventario de documentos", dificultad: "baja", avance: 100 },
                { id: 2, nombre: "Adquisicion de escaners", dificultad: "baja", avance: 40 },
                { id: 3, nombre: "Capacitacion al personal", dificultad: "media", avance: 20 },
                { id: 4, nombre: "Digitalizacion progresiva", dificultad: "alta", avance: 0 }
            ]
        },
        {
            id: 5,
            nombre: "Implementación de comercio electrónico",
            dificultad: "Alta",
            tareas: [
                { id: 1, nombre: "Definicion de productos", dificultad: "baja", avance: 100 },
                { id: 2, nombre: "Integracion con pasarela de pagos", dificultad: "alta", avance: 20 },
                { id: 3, nombre: "Pruebas de usabilidad", dificultad: "media", avance: 0 },
                { id: 4, nombre: "Campaña de lanzamiento", dificultad: "media", avance: 0 }
            ]
        },
        {
            id: 6,
            nombre: "Actualización del sistema de nómina",
            dificultad: "Baja",
            tareas: [
                { id: 1, nombre: "Analisis de funcionalidades actuales", dificultad: "baja", avance: 100 },
                { id: 2, nombre: "Definicion de mejoras", dificultad: "media", avance: 40 },
                { id: 3, nombre: "Pruebas del nuevo sistema", dificultad: "media", avance: 30 },
                { id: 4, nombre: "Capacitacion a recursos humanos", dificultad: "baja", avance: 0 }
            ]
        }
    ],
    columnasTablero: [
        {
            avance: 0,
            encabezado: "a iniciar",
            estilo: "card-header bg-danger"
        },
        {
            avance: 1,
            encabezado: "iniciadas",
            estilo: "card-header bg-primary"
        },
        {
            avance: 100,
            encabezado: "finalizadas",
            estilo: "card-header bg-success"
        }
    ]

}
