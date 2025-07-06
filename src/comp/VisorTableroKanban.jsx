import TableroKanban from "./TableroKanban";

const VisorTableroKanban = (props) => {
    const {proyectos} = props;

    return(
        <>
            <TableroKanban proyectos={proyectos}/>
        </>
    );
}
export default VisorTableroKanban;