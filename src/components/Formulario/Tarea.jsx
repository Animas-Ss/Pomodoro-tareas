function Formulario (){
    return(
        <>
        <form>
            <label>Tarea</label>
            <input type="text" name="tarea" placeholder="Ingrese Tarea" />
            <label>Tiempo</label>
            <input type="time" name="asignacion" placeholder="time"/>
            <label>Fecha</label>
            <input type="date" name="fecha" placeholder="Fecha"/>
            <label>Descripcion</label>
            <textarea name="descripcion" placeholder="ingrese temas y tarea"></textarea>
        </form>
        </>
    );
}

export default Formulario;