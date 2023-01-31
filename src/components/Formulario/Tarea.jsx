import { useContext, useState } from "react";
import Backbutton from "../Botones/BackButton";
import SettingsContext from "../Contexto/SettingsContext";

import './Tarea.css';

function Formulario (){
    const settingsInfo = useContext(SettingsContext);

    const [tarea, setTarea] = useState({
        tarea: "",
        asignacion: "",
        descripcion: ""
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        alert("enviado");
        console.log(tarea)
        settingsInfo.setTareas((old) => [...old, tarea]);
        console.log(settingsInfo.tareas);
    }

    const handleChange = (e) => {
        const{name, value}= e.target;
        console.log(name);
        console.log(value);
        setTarea((old) => ({
            ...old, [name] :value
        }))
    }

    return(
        <>
        <form className="form-completo" onSubmit={handleSubmit}>
            <div className="box-input">
            <input 
            type="text" 
            name="tarea" 
            className="form-input"
            onChange={handleChange}
             />
             <span>TAREA:</span>
             <i></i>
            </div>

            <div className="box-input">
            <input 
            type="text" 
            name="asignacion" 
            className="form-input"
            onChange={handleChange}
             />
             <span>ASIGNACION:</span>
             <i></i>
            </div>
            <div className="box-input">
            <textarea 
            className="form-input" 
            name="descripcion"
            onChange={handleChange}
            ></textarea>
            <span>DESCRIPCION:</span>
            <i></i>
            </div>
            <div style={{margin: '20px'}}>
            <button type="submit" className="btn-form">Agregar</button>
            </div>
            <div style={{position: 'absolute', bottom: '20px', left: '10px'}}>
                <Backbutton onClick={() => settingsInfo.setShowForm(!settingsInfo.showForm)}/>
            </div>
        </form>
        </>
    );
}

export default Formulario;